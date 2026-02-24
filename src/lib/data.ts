import type { SlideData, WeekendBagProduct, MarqueeItem, TimelineItem, ScrollStep, Product, HotspotProduct, Look, FooterLinkGroup } from "./types";

export const navLinks = [
    { label: "WOMEN", href: "/collections/women" },
    { label: "MEN", href: "/collections/men" },
    { label: "BLOG", href: "/collections/blog" },
    { label: "About", href: "/collections/about" },
];

export const slides: SlideData[] = [
    {
        label: "LE NOVA",
        title: "ELEGANT & TIMELESS",
        buttons: [{ text: "VIEW COLLECTION", href: "/collections/le-nova" }],
        background: { type: 'image', url: '/assets/hero-bag-2.png' }
    },
    {
        label: "NEW COLLECTION",
        title: "BEAUTIES",
        buttons: [
            { text: "WOMEN", href: "/collections/women" },
            { text: "MEN", href: "/collections/men" }
        ],
        background: { type: 'video', url: 'https://prestige-theme-allure.myshopify.com/cdn/shop/videos/c/vp/a9ea64c362124ba0b6ffc37ea30bc5c8/a9ea64c362124ba0b6ffc37ea30bc5c8.HD-1080p-4.8Mbps-13664080.mp4?v=0' }
    },
    {
        label: "LE SAC BAGUETTE",
        title: "INSPIRED BY THE 90S",
        buttons: [{ text: "SHOP NOW", href: "/collections/bags" }],
        background: { type: 'image', url: '/assets/hero-bag-1.png' }
    },
    {
        label: "LE MINI",
        title: "CHARTREUSE CHIC",
        buttons: [{ text: "SHOP NOW", href: "/collections/bags" }],
        background: { type: 'image', url: '/assets/hero-bag-3.png' }
    }
];

export const weekendBagProducts: WeekendBagProduct[] = [
    {
        id: 1,
        name: "LE COMPACT WEEKENDER BUFFALO BLACK",
        price: "$470.00",
        image: "/assets/Le-Compact-Weekender-Buffle-Noir-01_2c0fb581-2bd2-453e-a305-161fbfb97621.webp",
        badge: "BEST SELLER"
    },
    {
        id: 2,
        name: "LE COMPACT WEEKENDER BLACK PEBBLED LEATHER",
        price: "$470.00",
        image: "/assets/Weekender-Graine-Noir-01_30f52b96-4635-4e78-a3aa-cfc6d4cfbc42.webp",
    },
    {
        id: 3,
        name: "LE COMPACT WEEKENDER BLUE PEBBLED LEATHER",
        price: "$470.00",
        image: "/assets/b-bag.webp",
        imageHover: "/assets/b-bag-back.webp",
    },
    {
        id: 4,
        name: "LE COMPACT WEEKENDER BUFFALO BROWN",
        price: "$470.00",
        image: "/assets/Le-Compact-Weekender-Buffle-Brun-01_4f3c8d5a-25d3-4b3c-b5cf-f587983da039.webp",
        imageHover: "/assets/Le-Compact-Weekender-Buffle-Brun-02_cb83be45-fb02-4399-8460-4f583902e185.webp",
    }
];

export const marqueeUpperItems: MarqueeItem[] = [
    { text: "New: Le Sac Baguette", image: "/assets/marcqee.avif", href: "/products/le-sac-baguette" },
    { text: "New: Le Sac Baguette", image: "/assets/marcqee.avif", href: "/products/le-sac-baguette" },
    { text: "New: Le Sac Baguette", image: "/assets/marcqee.avif", href: "/products/le-sac-baguette" },
    { text: "New: Le Sac Baguette", image: "/assets/marcqee.avif", href: "/products/le-sac-baguette" },
    { text: "New: Le Sac Baguette", image: "/assets/marcqee.avif", href: "/products/le-sac-baguette" },
    { text: "New: Le Sac Baguette", image: "/assets/marcqee.avif", href: "/products/le-sac-baguette" },
];

export const marqueeLowerItems: MarqueeItem[] = [
    { text: "Shop New Arrivals", image: "/assets/marcqee2.jpg", href: "/collections/new-arrivals" },
    { text: "Shop New Arrivals", image: "/assets/marcqee2.jpg", href: "/collections/new-arrivals" },
    { text: "Shop New Arrivals", image: "/assets/marcqee2.jpg", href: "/collections/new-arrivals" },
    { text: "Shop New Arrivals", image: "/assets/marcqee2.jpg", href: "/collections/new-arrivals" },
    { text: "Shop New Arrivals", image: "/assets/marcqee2.jpg", href: "/collections/new-arrivals" },
    { text: "Shop New Arrivals", image: "/assets/marcqee2.jpg", href: "/collections/new-arrivals" },
];

// Timeline data (extracted from TimelineSection)
export const timelineData: TimelineItem[] = [
    {
        year: "2013",
        subtitle: "FIRST PRODUCT",
        title: "LE PETIT CARTABLE",
        description: "Leo et Violette's story is ours. We are Léo Dominguez & Violette Polchi. Two Parisian lovers sharing our life for more than 8 years. Ever since we met, we always had the dream to develop a project together. By creating Le petit cartable in January 2013, we started to realize this dream. Our first Kickstarter campaign is launched!",
        image: "/assets/timeline-1.webp",
    },
    {
        year: "2014",
        subtitle: "OUR VISION",
        title: "TRANSPARENCY",
        description: "No intermediaries and no wholesalers. So no excessive margins. It's just between you and us. And this is what allows us to offer you a quality product at an affordable price. Welcome to the fashion of the 21st century.",
        image: "/assets/timeline-2.webp",
    },
    {
        year: "2015",
        subtitle: "NEW FACTORY",
        title: "RELATIONSHIP",
        description: "Our workshop is located next to Naples, Italy. It was founded in the early 1980s by Dino Levorino, a craftsman well known for his know-how. The workshop was taken over by his son Gennaro, with whom we talk every day, about the production and the design of new models. More than just a factory, they are real partners who have shared Leo et Violette's vision.",
        image: "/assets/timeline-3.webp",
    },
    {
        year: "2017",
        subtitle: "OPENING",
        title: "OUR FLAGSHIP",
        description: "Our first Léo et Violette location, right in the heart of Paris. The perfect place to discover and buy the collection. Open Monday to Saturday + Sunday in December.",
        image: "/assets/timeline-4.webp",
    },
    {
        year: "2020",
        subtitle: "NEW IDEA",
        title: "SMALL LEATHER GOODS",
        description: "With the success of our bags we wanted to go further by offering small leather goods: wallets, card holders and pouches.",
        image: "/assets/Timeline-5.webp",
    },
    {
        year: "2021",
        subtitle: "FIRST COLLABORATION",
        title: "LÉO ET VIOLETTE X WENDY SWAN",
        description: "The meeting between Wendy and Léo et Violette gave birth to our new bag: The Dalia. Every detail, from the choice of leather quality to the metal parts, has been carefully thought out.",
        image: "/assets/timeline-6.webp",
    }
];

// Scroll section steps (extracted from ScrollSection)
export const scrollSteps: ScrollStep[] = [
    {
        id: 1,
        step: "# 1",
        title: "THE DESIGN",
        description: "At Léo et Violette, we create our bags with you in mind. All our products are imagined and designed in Paris, in our offices on rue Sainte-Anne. Most of the time, an idea for a model comes from a need that you have expressed to us through the various feedbacks we collect throughout the year.",
        image: "/assets/Multiple_media_with_text_-_Portrait_-_home_1.webp",
        link: "/pages/design"
    },
    {
        id: 2,
        step: "# 2",
        title: "OUR COMMITMENTS",
        description: "At Léo et Violette, from day one we have made responsibility part of our values. Towards you, and also towards the environment through the way we produce our collections. From design to distribution, we take the greatest care with our products, which reflect our values: timeless, quality, at the right price.",
        image: "/assets/Images_with_text_scroll_-_Image_-_home_2.webp",
        link: "/pages/commitments"
    }
];

// Best seller products (extracted from BestSellers)
export const bestSellerProducts: Record<"women" | "men", Product[]> = {
    women: [
        { id: 1, name: "GRAND NOVA LISSE IVOIRE", price: "$420.00", image: "/assets/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.webp", imageHover: "/assets/white-b.webp", badge: "NEW" },
        { id: 2, name: "LE GINA LIEGE PETROLE", price: "$320.00", image: "/assets/Le-Gina-Liege-Petrole-01_6b1ce683-98ce-4739-9915-b1ec09d718cc.webp", imageHover: "/assets/green-b.webp" },
        { id: 3, name: "ELEGANT CUIR MIROIR CHOCOLAT", price: "$420.00", image: "/assets/brown-f.webp", imageHover: "/assets/Elegant-Cuir-Miroir-Chocolat-01_78e03cea-f382-4fd4-a12d-71e1d9cb0999.webp" },
        { id: 4, name: "LE SLIM BRIEFCASE BLACK", price: "$470.00", image: "/assets/black-f.webp", imageHover: "/assets/black-b.webp", badge: "BEST SELLER" },
        { id: 9, name: "WOMEN BAG CAROUSEL", price: "$390.00", image: "/assets/women-bag-caraousel.webp", badge: "NEW" },
        { id: 10, name: "WOMEN BAG CAROUSEL", price: "$390.00", image: "/assets/women-bag-caraousel-back.webp", badge: "BEST SELLER" },
    ],
    men: [
        { id: 5, name: "LE SLIM BRIEFCASE BLACK", price: "$420.00", image: "/assets/black-f.webp", imageHover: "/assets/black-b.webp", badge: "NEW" },
        { id: 6, name: "ELEGANT CUIR MIROIR CHOCOLAT", price: "$320.00", image: "/assets/brown-f.webp", imageHover: "/assets/Elegant-Cuir-Miroir-Chocolat-01_78e03cea-f382-4fd4-a12d-71e1d9cb0999.webp" },
        { id: 7, name: "LE GINA LIEGE PETROLE", price: "$420.00", image: "/assets/Le-Gina-Liege-Petrole-01_6b1ce683-98ce-4739-9915-b1ec09d718cc.webp", imageHover: "/assets/green-b.webp" },
        { id: 8, name: "GRAND NOVA LISSE IVOIRE", price: "$470.00", image: "/assets/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.webp", imageHover: "/assets/white-b.webp", badge: "BEST SELLER" },
    ],
};

// Shop the look data (extracted from ShopTheLook)
export const shopTheLookData: Look[] = [
    {
        id: 1, image: "/assets/Shop_the_look_-_home_2.jpg", products: [
            { id: "p2", x: 62, y: 43, badge: "BEST SELLER", name: "LE GRAND NOVA IVORY LIÉGÉ", price: "$450.00", image: "/assets/Grand-Nova-Lisse-Ivoire-01_c5e43010-e4a3-4dac-97b1-5552659b9a73.webp", imageHover: "/assets/white-b.webp", href: "#" }
        ]
    },
    {
        id: 2, image: "/assets/Shop_the_look_-_mini_primo.jpg", products: [
            { id: "p4", x: 65, y: 76, badge: "BEST SELLER", name: "LE GINA LIEGE PETROLE", price: "$320.00", image: "/assets/shopt-thelook2-front.webp", imageHover: "/assets/shopthelook2-back.webp", href: "#" }
        ]
    }
];

// Our Selection images (extracted from OurSelection)
export const ourSelectionImages = [
    "/assets/brown-bag-1.webp",
    "/assets/brown-bag-2.webp",
    "/assets/brown-bag-3.webp",
    "/assets/brown-bag-4.webp",
    "/assets/brown-bag-5.webp",
];

// Footer link groups (extracted from Footer)
export const footerShopLinks: FooterLinkGroup = {
    title: "SHOP",
    links: [
        { label: "Women", href: "#" },
        { label: "Men", href: "#" },
        { label: "Small Leather Goods", href: "#" },
        { label: "Collaboration", href: "#" },
    ]
};

export const footerInfoLinks: FooterLinkGroup = {
    title: "INFORMATION",
    links: [
        { label: "Theme Features", href: "#" },
        { label: "About us", href: "#" },
        { label: "Contact us", href: "#" },
        { label: "FAQ", href: "#" },
        { label: "Maintenance Tips", href: "#" },
    ]
};

// Mega menu data for WOMEN, MEN, ABOUT
export interface MegaMenuColumn {
    title: string;
    links: { label: string; href: string }[];
}

export interface MegaMenuFeatured {
    image: string;
    title: string;
    subtitle: string;
    href: string;
}

export interface MegaMenuData {
    columns: MegaMenuColumn[];
    featured: MegaMenuFeatured[];
}

export const megaMenus: Record<string, MegaMenuData> = {
    WOMEN: {
        columns: [
            {
                title: "BAGS",
                links: [
                    { label: "Shoulder bags", href: "/collections/women/shoulder-bags" },
                    { label: "Mini bags", href: "/collections/women/mini-bags" },
                    { label: "Business bags", href: "/collections/women/business-bags" },
                    { label: "Small leather goods", href: "/collections/women/small-leather-goods" },
                    { label: "All products", href: "/collections/women" },
                ],
            },
            {
                title: "POPULAR MODELS",
                links: [
                    { label: "Le Mini Dalia", href: "/products/le-mini-dalia" },
                    { label: "Le Nova", href: "/products/le-nova" },
                    { label: "Le Dino", href: "/products/le-dino" },
                    { label: "Le Gina", href: "/products/le-gina" },
                ],
            },
            {
                title: "POPULAR COLORS",
                links: [
                    { label: "Black", href: "/collections/women?color=black" },
                    { label: "Camel", href: "/collections/women?color=camel" },
                    { label: "Almond Green", href: "/collections/women?color=almond-green" },
                    { label: "Ivory", href: "/collections/women?color=ivory" },
                ],
            },
        ],
        featured: [
            {
                image: "/assets/mega-menu-image-le-dalia.webp",
                title: "LÉO & VIOLETTE X WENDY SWAN",
                subtitle: "THE DALIA",
                href: "/collections/collaboration",
            },
            {
                image: "/assets/mega-menu-image-color.webp",
                title: "THE SYMBOL OF OUR VALUES",
                subtitle: "ALMOND GREEN",
                href: "/collections/women?color=almond-green",
            },
        ],

    },
    MEN: {
        columns: [
            {
                title: "BAGS",
                links: [
                    { label: "Business bags", href: "/collections/men/business-bags" },
                    { label: "Weekend bag", href: "/collections/men/weekend-bag" },
                    { label: "All Products", href: "/collections/men" },
                ],
            },
            {
                title: "SMALL LEATHER GOODS",
                links: [
                    { label: "Wallet", href: "/collections/men/wallet" },
                    { label: "Card holder", href: "/collections/men/card-holder" },
                    { label: "All Products", href: "/collections/men/small-leather-goods" },
                ],
            },
            {
                title: "POPULAR COLORS",
                links: [
                    { label: "Black", href: "/collections/men?color=black" },
                    { label: "Navy", href: "/collections/men?color=navy" },
                    { label: "Khaki", href: "/collections/men?color=khaki" },
                ],
            },
        ],
        featured: [
            {
                image: "/assets/mega-menu-image-nouveau-cartable.webp",
                title: "LE NOUVEAU CARTABLE",
                subtitle: "5 COLORS, FROM $420",
                href: "/products/le-nouveau-cartable",
            },
            {
                image: "/assets/mega-menu-image-porte-cartes.webp",
                title: "LE PORTE-CARTES",
                subtitle: "ACCESSORIES",
                href: "/collections/men/accessories",
            },
        ],
    },
    About: {
        columns: [
            {
                title: "DISCOVER",
                links: [
                    { label: "Theme Features", href: "/pages/theme-features" },
                    { label: "Our story", href: "/pages/our-story" },
                    { label: "Commitments", href: "/pages/commitments" },
                ],
            },
            {
                title: "MORE",
                links: [
                    { label: "Materials and Care", href: "/pages/materials-and-care" },
                    { label: "FAQ", href: "/pages/faq" },
                    { label: "Contact", href: "/pages/contact" },
                ],
            },
        ],
        featured: [
            {
                image: "/assets/mega-menu-image-story.webp",
                title: "THE STORY",
                subtitle: "OF LÉO ET VIOLETTE",
                href: "/pages/our-story",
            },
            {
                image: "/assets/mega-menu-image-commitments.webp",
                title: "OUR COMMITMENTS",
                subtitle: "FROM DESIGN TO DISTRIBUTION",
                href: "/pages/commitments",
            },
        ],

    },
};
