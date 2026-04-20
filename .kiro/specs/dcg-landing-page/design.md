# Design Document

## Overview

The DCG landing page will be built as a modern, single-page React application using Vite, Tailwind CSS, and Framer Motion for animations. The design follows a clean, minimal aesthetic inspired by Stripe and Notion, with glassmorphism elements and smooth micro-interactions. The page structure flows logically from problem identification through solution explanation to conversion, maintaining user engagement while building trust and credibility.

## Architecture

### Technology Stack
- **Frontend Framework**: React 18 with JSX
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS for utility-first styling with custom design tokens
- **Animations**: Framer Motion for smooth, performant animations
- **Icons**: Lucide React for consistent, modern iconography
- **Typography**: Inter font family for clean, readable text
- **Deployment**: Vercel for fast, global CDN delivery

### Design System
- **Color Palette**: 
  - Primary: Blue gradient (#3B82F6 to #1E40AF)
  - Secondary: Purple accent (#8B5CF6)
  - Neutral: Gray scale (#F8FAFC to #0F172A)
  - Success: Green (#10B981)
  - Warning: Amber (#F59E0B)
  - Danger: Red (#EF4444)
- **Typography Scale**: 
  - Headings: 48px, 36px, 24px, 20px, 18px
  - Body: 16px, 14px
  - Line heights: 1.2 for headings, 1.6 for body
- **Spacing**: 8px base unit with consistent scale (8, 16, 24, 32, 48, 64, 96, 128px)
- **Border Radius**: 8px for cards, 12px for buttons, 16px for hero elements
- **Shadows**: Layered approach with subtle elevation

## Components and Interfaces

### Core Components

#### 1. Header Component
```jsx
<Header>
  - Logo with DCG branding
  - Navigation menu (minimal)
  - Theme toggle (dark/light)
  - CTA button (Add to Chrome)
</Header>
```

#### 2. Hero Section
```jsx
<HeroSection>
  - Main headline with gradient text
  - Subtext explanation
  - Dual CTA buttons
  - Animated visual (personas or signal/noise)
  - Scroll indicator
</HeroSection>
```

#### 3. Problem Section
```jsx
<ProblemSection>
  - Section heading
  - Tracking explanation with icons
  - Profile building visualization
  - "Blocking isn't enough" callout
</ProblemSection>
```

#### 4. Solution Section
```jsx
<SolutionSection>
  - Core concept explanation
  - Formula visualization
  - Signal corruption animation
  - Differentiation points
</SolutionSection>
```

#### 5. Features Grid
```jsx
<FeaturesGrid>
  - FeatureCard components (6 total)
  - Icon + title + description
  - Hover animations
  - Staggered entrance animations
</FeaturesGrid>
```

#### 6. How It Works Flow
```jsx
<WorkflowSection>
  - Step components with numbers
  - Process diagram
  - Connecting lines/arrows
  - Progressive disclosure
</WorkflowSection>
```

#### 7. Phishing Protection
```jsx
<PhishingSection>
  - Real-time protection explanation
  - UI mockup of warning popup
  - Risk assessment visualization
  - User control emphasis
</PhishingSection>
```

#### 8. Dashboard Preview
```jsx
<DashboardSection>
  - Transparency messaging
  - Dashboard mockup
  - Control features highlight
  - Privacy emphasis
</DashboardSection>
```

#### 9. Comparison Table
```jsx
<ComparisonSection>
  - Traditional vs DCG comparison
  - Visual differentiation
  - Feature comparison grid
  - Advantage highlighting
</ComparisonSection>
```

#### 10. FAQ Accordion
```jsx
<FAQSection>
  - Expandable question items
  - Smooth animations
  - Comprehensive answers
  - Search functionality
</FAQSection>
```

#### 11. Final CTA
```jsx
<FinalCTA>
  - Compelling headline
  - Dual action buttons
  - Trust indicators
  - Social proof elements
</FinalCTA>
```

### Animation Strategy

#### Entrance Animations
- **Fade + Slide Up**: Default for most sections
- **Stagger**: Feature cards and FAQ items
- **Scale**: CTA buttons and interactive elements
- **Parallax**: Background elements for depth

#### Interaction Animations
- **Hover States**: Subtle scale and shadow changes
- **Button Press**: Quick scale down feedback
- **Card Hover**: Lift effect with shadow increase
- **Icon Animations**: Subtle rotations and morphing

#### Scroll-Triggered Animations
- **Progress Indicators**: Show completion as user scrolls
- **Counter Animations**: Numbers counting up when visible
- **Path Drawing**: SVG illustrations drawing on scroll
- **Parallax Elements**: Background movement for depth

## Data Models

### Theme Configuration
```javascript
const themeConfig = {
  colors: {
    primary: { light: '#3B82F6', dark: '#60A5FA' },
    background: { light: '#FFFFFF', dark: '#0F172A' },
    text: { light: '#1F2937', dark: '#F9FAFB' },
    accent: { light: '#8B5CF6', dark: '#A78BFA' }
  },
  animations: {
    duration: { fast: 0.2, normal: 0.3, slow: 0.5 },
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
  }
}
```

### Feature Data Structure
```javascript
const features = [
  {
    id: 'behavioral-noise',
    icon: 'Activity',
    title: 'Behavioral Noise Engine',
    description: 'Runs during idle time...',
    details: ['Runs during idle', 'Opens real websites', ...]
  },
  // ... other features
]
```

### FAQ Data Structure
```javascript
const faqs = [
  {
    id: 'performance',
    question: 'Does this slow my system?',
    answer: 'DCG is designed to be lightweight...',
    category: 'technical'
  },
  // ... other FAQs
]
```

## Error Handling

### Loading States
- **Skeleton Loading**: For content that takes time to render
- **Progressive Enhancement**: Core content loads first, enhancements follow
- **Fallback Images**: Placeholder graphics if animations fail to load
- **Graceful Degradation**: Functionality works without JavaScript

### Animation Fallbacks
- **Reduced Motion**: Respect user's motion preferences
- **Performance Monitoring**: Disable complex animations on low-end devices
- **Timeout Handling**: Fallback to static content if animations don't load

### Responsive Breakpoints
- **Mobile**: 320px - 768px (single column, simplified animations)
- **Tablet**: 768px - 1024px (two-column layout, reduced animations)
- **Desktop**: 1024px+ (full experience with all animations)

## Testing Strategy

### Visual Testing
- **Component Storybook**: Isolated component testing
- **Cross-browser Testing**: Chrome, Firefox, Safari, Edge
- **Device Testing**: Mobile, tablet, desktop viewports
- **Theme Testing**: Light and dark mode validation

### Performance Testing
- **Lighthouse Audits**: Performance, accessibility, SEO scores
- **Core Web Vitals**: LCP, FID, CLS optimization
- **Animation Performance**: 60fps maintenance
- **Bundle Size**: Keep under 500KB initial load

### Accessibility Testing
- **Screen Reader**: NVDA, JAWS, VoiceOver compatibility
- **Keyboard Navigation**: Full functionality without mouse
- **Color Contrast**: WCAG AA compliance
- **Focus Management**: Clear focus indicators

### User Experience Testing
- **Conversion Funnel**: Track user journey through page
- **A/B Testing**: Different CTA placements and messaging
- **Heat Mapping**: User interaction patterns
- **Performance Monitoring**: Real user metrics

## Implementation Phases

### Phase 1: Core Structure
- Set up React + Vite + Tailwind
- Create basic component structure
- Implement responsive layout
- Add dark/light theme switching

### Phase 2: Content Sections
- Build all major sections
- Add static content and styling
- Implement basic responsive behavior
- Create reusable components

### Phase 3: Animations & Interactions
- Add Framer Motion animations
- Implement scroll-triggered effects
- Create hover and click interactions
- Optimize animation performance

### Phase 4: Polish & Optimization
- Fine-tune animations and timing
- Optimize bundle size and performance
- Add accessibility enhancements
- Implement analytics and tracking

## Design Decisions & Rationales

### Single Page Application
**Decision**: Build as SPA rather than multi-page site
**Rationale**: Smoother animations, faster navigation, better user experience for conversion-focused content

### Tailwind CSS
**Decision**: Use utility-first CSS framework
**Rationale**: Faster development, consistent design system, smaller bundle size, easier maintenance

### Framer Motion
**Decision**: Use Framer Motion for animations
**Rationale**: React-optimized, declarative API, performance-focused, extensive animation capabilities

### Glassmorphism Design
**Decision**: Implement subtle glassmorphism effects
**Rationale**: Modern aesthetic, adds depth without distraction, works well with dark/light themes

### Progressive Disclosure
**Decision**: Reveal information gradually as user scrolls
**Rationale**: Prevents cognitive overload, maintains engagement, creates natural reading flow

### Trust-First Messaging
**Decision**: Lead with transparency and realistic claims
**Rationale**: Privacy tools require high trust, technical users appreciate honesty, builds credibility