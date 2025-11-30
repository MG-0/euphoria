# 🗂 Project Structure

/src/
├─ 📦 app/  
│  ├─ 🌐 [locale]/                     ← لكل لغة (ar / en)  
│  │   ├─ page.tsx                     ← Home Page (استدعاء HomeContainer)  
│  │   ├─ shop/page.tsx                ← Shop Page (استدعاء ShopContainer)  
│  │   ├─ cart/page.tsx                ← Cart Page (استدعاء CartContainer)  
│  │   └─ not-found.tsx                ← 404  
│  │
│  ├─ layout.tsx                       ← Root layout + providers  
│  └─ providers.tsx                    ← ThemeProvider, IntlProvider, Context Providers  

├─ 📦 components/  
│  ├─ 📦 ui/  
│  │   ├─ 🔹 shadcn/                    ← مكونات shadcn-ui الجاهزة  
│  │   │   ├─ Button.tsx  
│  │   │   ├─ Input.tsx  
│  │   │   └─ ...  
│  │   ├─ 🔹 custom/                     ← مكونات reusable عامة  
│  │   │   ├─ Hero.tsx  
│  │   │   ├─ FeaturedProducts.tsx  
│  │   │   └─ Testimonials.tsx  
│  │   └─ 🟢 [pageName]/                 ← مكونات page-specific (Home / Shop / ...)  
│  │       └─ SectionX.tsx  
│  │
│  └─ 📦 containers/                     ← containers تجمع UI + logic  
│      ├─ HomeContainer.tsx  
│      ├─ ShopContainer.tsx  
│      └─ CartContainer.tsx  

├─ 📦 features/                          ← logic/hooks/services لكل feature  
│  ├─ home/  
│  │   ├─ hooks/useHero.ts  
│  │   ├─ hooks/useFeaturedProducts.ts  
│  │   ├─ hooks/useTestimonials.ts  
│  │   └─ services/homeService.ts  
│  │
│  ├─ shop/  
│  │   ├─ hooks/useFilters.ts  
│  │   ├─ hooks/useProducts.ts  
│  │   ├─ hooks/usePagination.ts  
│  │   └─ services/shopService.ts  
│  │
│  └─ cart/  
│      ├─ hooks/useCart.ts  
│      └─ services/cartService.ts  

├─ 📦 lib/                               ← helpers / reusable functions  
│  ├─ apiClient.ts  
│  ├─ currency.ts  
│  ├─ storage.ts  
│  ├─ validate.ts  
│  └─ formatDate.ts  

├─ 📦 constants/                         ← القيم الثابتة  
│  ├─ routes.ts  
│  ├─ colors.ts  
│  ├─ enums.ts  
│  └─ api.ts  

├─ 📦 types/                             ← TypeScript types/interfaces  
│  ├─ product.ts  
│  ├─ cart.ts  
│  ├─ user.ts  
│  └─ index.ts  

├─ 📦 stores/                             ← context / zustand / redux  
│  ├─ uiContext.tsx  
│  ├─ themeContext.tsx  
│  └─ index.ts  

├─ 📦 i18n/  
│  ├─ messages/  
│  │   ├─ en.json  
│  │   └─ ar.json  
│  ├─ routing.ts  
│  └─ index.ts                          ← next-intl setup  

├─ 📦 styles/  
│  ├─ tailwind.css  
│  ├─ variables.css  
│  ├─ animations.css  
│  └─ typography.css  

├─ 📦 public/  
│  ├─ images/  
│  ├─ icons/  
│  └─ favicon.ico  

├─ .env.local  
├─ tailwind.config.ts  
├─ postcss.config.js  
├─ next.config.mjs  
├─ tsconfig.json  
└─ package.json
