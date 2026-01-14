const fs = require('fs');
const path = process.argv[2];
if(!path) { console.error('Usage: node check_html_balance.js <file>'); process.exit(1); }
const s = fs.readFileSync(path,'utf8');
const tagRe = /<!--([\s\S]*?)-->|<([a-zA-Z0-9-]+)([^>]*)>|<\/([a-zA-Z0-9-]+)\s*>/g;
let match;
const stack = [];
let line=1, lastIndex=0;
function pos(idx){ return s.slice(0,idx).split('\n').length; }
let openDivCount=0, closeDivCount=0;
while((match = tagRe.exec(s))){
  const [full,comment,openTag,openAttrs,closeTag] = match;
  const idx = match.index;
  if(comment!==undefined) continue; // skip comments
  if(openTag){
    const tag = openTag.toLowerCase();
    if(tag === 'div') openDivCount++;
    // self-closing or void tags
    const selfClosing = /\/$/.test(openAttrs) || ['input','img','br','hr','meta','link','area','base','col','embed','param','source','track','wbr'].includes(tag);
    // if it's a table-internal tag like tr/td/th/tbody/thead allow, but still track
    if(!selfClosing) {
      stack.push({tag, pos: pos(idx)});
    }
  } else if(closeTag){
    const tag = closeTag.toLowerCase();
    if(tag === 'div') closeDivCount++;
    // pop until matching tag found
    if(stack.length===0){ console.error(`Unmatched closing </${tag}> at line ${pos(idx)}`); process.exit(2); }
    const last = stack.pop();
    if(last.tag !== tag){
      console.error(`Mismatched closing tag </${tag}> at line ${pos(idx)}; expected </${last.tag}> to close opened at line ${last.pos}`);
      process.exit(3);
    }
  }
}
console.log(`div opens: ${openDivCount}, div closes: ${closeDivCount}`);
if(stack.length>0){
  console.error('Unclosed tags (innermost last):');
  stack.forEach(s=> console.error(`  <${s.tag}> opened at line ${s.pos}`));
  process.exit(4);
}
console.log('No tag mismatches detected.');
