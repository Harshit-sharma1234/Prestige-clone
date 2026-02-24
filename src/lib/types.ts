// Shared TypeScript types for the E-COM project

export interface SlideBackground {
    type: 'image' | 'video';
    url: string;
}

export interface SlideButton {
    text: string;
    href: string;
}

export interface SlideData {
    label: string;
    title: string;
    buttons: SlideButton[];
    background: SlideBackground;
}

export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    imageHover?: string;
    badge?: string;
}

export interface HotspotProduct {
    id: string;
    x: number;
    y: number;
    badge?: string;
    name: string;
    price: string;
    image: string;
    imageHover: string;
    href: string;
}

export interface Look {
    id: number;
    image: string;
    products: HotspotProduct[];
}

export interface TimelineItem {
    year: string;
    subtitle: string;
    title: string;
    description: string;
    image: string;
}

export interface ScrollStep {
    id: number;
    step: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

export interface WeekendBagProduct {
    id: number;
    name: string;
    price: string;
    image: string;
    imageHover?: string;
    badge?: string;
}

export interface FooterLink {
    label: string;
    href: string;
}

export interface FooterLinkGroup {
    title: string;
    links: FooterLink[];
}

export interface MarqueeItem {
    text: string;
    image: string;
    href: string;
}
