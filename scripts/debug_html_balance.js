const fs = require('fs');
const path = process.argv[2];
const s = fs.readFileSync(path,'utf8');
const tagRe = /<!--([\s\S]*?)-->|<([a-zA-Z0-9-]+)([^>]*)>|<\/([a-zA-Z0-9-]+)\s*>/g;
let match; let stack=[];
function pos(idx){ return s.slice(0,idx).split('\n').length; }
while((match = tagRe.exec(s))){
  const [full, comment, openTag, openAttrs, closeTag] = match;
  const idx = match.index;
  if(comment!==undefined) continue;
  if(openTag){
    const tag=openTag.toLowerCase();
    const selfClosing = /\/$/.test(openAttrs) || ['input','img','br','hr','meta','link','area','base','col','embed','param','source','track','wbr'].includes(tag);
    if(!selfClosing){ stack.push({tag,pos:pos(idx)}); console.log(`${pos(idx)}: push <${tag}> (stack=${stack.map(s=>s.tag).join(',')})`); }
  } else if(closeTag){
    const tag = closeTag.toLowerCase();
    console.log(`${pos(idx)}: pop </${tag}> (stack top=${stack.length?stack[stack.length-1].tag:'EMPTY'})`);
    if(stack.length===0){ console.error(`Unmatched closing </${tag}> at line ${pos(idx)}`); process.exit(2); }
    const last = stack.pop();
    if(last.tag !== tag){ console.error(`Mismatched closing tag </${tag}> at line ${pos(idx)}; expected </${last.tag}> to close opened at line ${last.pos}`); process.exit(3); }
  }
}
console.log('Done. Stack size',stack.length); if(stack.length>0) stack.forEach(s=>console.log('Unclosed <'+s.tag+'> at',s.pos));
