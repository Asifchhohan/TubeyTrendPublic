import {  Routes } from '@angular/router';
import { LoginComponent } from './features/auth/login/login.component'; 
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { SignupComponent } from './features/auth/signup/signup.component';
import { SideNavbarComponent } from './shared/components/side-navbar/side-navbar.component';
import { AiVideoInsightsComponent } from './shared/components/ai-video-insights/ai-video-insights.component';
import { ViralVideoIdeasComponent } from './shared/components/viral-video-ideas/viral-video-ideas.component';
import { TrendingTopicsFinderComponent } from './shared/components/trending-topics-finder/trending-topics-finder.component';
import { AiTitleGeneratorComponent } from './shared/components/ai-titles-and-hook-generator/ai-titles-and-hook-generator.component';
import { TrendingKeywordsAndHashtagsComponent } from './shared/components/trending-keywords-and-hashtags/trending-keywords-and-hashtags.component';
import { CompetitorInsightsComponent } from './shared/components/competitor-video-analysis/competitor-video-analysis.component';
import { AiContentPlannerComponent } from './shared/components/ai-content-planner/ai-content-planner.component';
import { AiThumbnailGeneratorComponent } from './shared/components/ai-thumbnail-generator/ai-thumbnail-generator.component';
import { ChannelNameGeneratorComponent } from './shared/components/channel-name-generator/channel-name-generator.component';
import { ChatgptForYoutubersComponent } from './shared/components/chatgpt-for-youtubers/chatgpt-for-youtubers.component';
import { ContentGeneratorComponent } from './shared/components/content-generator/content-generator.component';
import { AudienceEngagementPredictionsComponent } from './shared/components/audience-engagement-predictions/audience-engagement-predictions.component';
import { SeoOptimizedDescriptionsComponent } from './shared/components/seo-optimized-descriptions/seo-optimized-descriptions.component';
import { VideoScriptCreatorComponent } from './shared/components/video-script-creator/video-script-creator.component';
import { ViewsBlogComponent } from './shared/components/blog-views/views-blog.component';
import { MonetizationBlogComponent } from './shared/components/blog-monetization/monetization-blog.component';
import { SubscribersBlogComponent } from './shared/components/blog-subscribers/subscribers-blog.component';
import { AnalyticsBlogComponent } from './shared/components/blog-analytics/analytics-blog.component';
import { AllTipsInsightsComponent } from './shared/components/blog-all-tips/all-tips-insights.component';
import { CoachingComponent } from './shared/components/coaching/coaching.component';
import { ExtensionComponent } from './shared/components/extension/extension.component';
import { YoutubeGrowthMatricsComponent } from './shared/components/youtube-growth-matrics/youtube-growth-matrics.component';
import { PerformanceTrackingAndAnalytisComponent } from './shared/components/performance-tracking-and-analytis/performance-tracking-and-analytis.component';
import { ContentOptimizerComponent } from './shared/components/content-optimization-tips/content-optimization-tips.component';
import { HomeComponent } from './features/home/home.component';

// New pages: Careers / Testimonials / Blog overview
import { CareersComponent } from './shared/components/careers/careers.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';
import { BlogComponent } from './shared/components/blog/blog.component';
import { SignupFreeComponent } from './features/auth/signup-free/signup-free.component';
import { ToptrendingyoutubechannelsComponent } from './features/toptrendingyoutubechannels/toptrendingyoutubechannels.component';
import { OverviewComponent } from './shared/components/overview/overview.component';

// Footer product pages
import { AffiliatesComponent } from './shared/footerComponents/affiliates/affiliates.component';
import { YoutubeStatsComponent } from './shared/footerComponents/youtube-stats/youtube-stats.component';
import { BrandSolutionsComponent } from './shared/footerComponents/brand-solutions/brand-solutions.component';
import { AgencySolutionsComponent } from './shared/footerComponents/agency-solutions/agency-solutions.component';
import { McnSolutionsComponent } from './shared/footerComponents/mcn-solutions/mcn-solutions.component';
import { BrowserExtensionComponent } from './shared/footerComponents/browser-extension/browser-extension.component';
import { TubeytrendAcademyComponent } from './shared/footerComponents/tubeytrend-academy/tubeytrend-academy.component';
// Footer informational pages
import { ContactComponent } from './shared/footerComponents/contact/contact.component';
import { TermsComponent } from './shared/footerComponents/terms/terms.component';
import { PrivacyComponent } from './shared/footerComponents/privacy/privacy.component';
import { SupportComponent } from './shared/footerComponents/support/support.component';
import { YoutubeViewsGuideComponent } from './shared/footerComponents/youtube-views-guide/youtube-views-guide.component';

import { PricingComponent } from './features/pricing/pricing.component';
import { CheckoutPageComponent } from './features/pricing/checkout-page/checkout-page.component';
import { ViewAllPlansComponent } from './features/pricing/view-all-plans/view-all-plans.component';
import { AuthGuard } from './core/guards/auth.guard';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'side-nabar', component: SideNavbarComponent },
  { path: 'ai-video-insights', component: AiVideoInsightsComponent },
  { path: 'viral-video-ideas', component: ViralVideoIdeasComponent },
  { path: 'trending-topics-finder', component: TrendingTopicsFinderComponent },
  { path: 'title-generator', component: AiTitleGeneratorComponent },
  { path: 'trending-keywords-hashtags', component: TrendingKeywordsAndHashtagsComponent },
  { path: 'competitor-insights', component: CompetitorInsightsComponent },
  { path: 'ai-content-planner', component: AiContentPlannerComponent },
  { path: 'ai-thumbnail-generator', component: AiThumbnailGeneratorComponent },
  { path: 'channel-name-generator', component: ChannelNameGeneratorComponent },
  { path: 'content-generator', component: ContentGeneratorComponent },
  { path: 'chatgpt-for-youtubers', component: ChatgptForYoutubersComponent },
  { path: 'audience-engagement-predictions', component: AudienceEngagementPredictionsComponent },
  { path: 'seo-optimized-descriptions', component: SeoOptimizedDescriptionsComponent },
  { path: 'video-script-creator', component: VideoScriptCreatorComponent },
  { path: 'blog/views', component: ViewsBlogComponent },
  { path: 'blog/monetization', component: MonetizationBlogComponent },
  { path: 'blog/subscribers', component: SubscribersBlogComponent },
  { path: 'blog/analytics', component: AnalyticsBlogComponent },
  { path: 'blog/all-tips-insights', component: AllTipsInsightsComponent },
  // Blog overview + company pages
  { path: 'blog', component: BlogComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'testimonials', component: TestimonialsComponent },
  { path: 'youtube-growth-metrics', component: YoutubeGrowthMatricsComponent },
  { path: 'performance-tracking-analytics', component: PerformanceTrackingAndAnalytisComponent },
  { path: 'content-optimizer', component: ContentOptimizerComponent },
  { path: 'coaching', component: CoachingComponent },
  { path: 'extension', component: ExtensionComponent },
  // Footer product pages
  { path: 'product/affiliates', component: AffiliatesComponent },
  { path: 'product/youtube-stats', component: YoutubeStatsComponent },
  { path: 'product/brand-solutions', component: BrandSolutionsComponent },
  { path: 'product/agency-solutions', component: AgencySolutionsComponent },
  { path: 'product/mcn-solutions', component: McnSolutionsComponent },
  { path: 'product/browser-extension', component: BrowserExtensionComponent },
  { path: 'product/academy', component: TubeytrendAcademyComponent },
  // Footer informational pages
  { path: 'contact', component: ContactComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy-policy', component: PrivacyComponent },
  { path: 'support', component: SupportComponent },
  { path: 'how-to-get-more-youtube-views', component: YoutubeViewsGuideComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup-free', component: SignupFreeComponent },
  { path: 'Top-trending-youtube-channels', component: ToptrendingyoutubechannelsComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'checkout/:planId', component: CheckoutPageComponent, canActivate: [AuthGuard] },
  { path: 'view-all-plans', component: ViewAllPlansComponent },  
  
];