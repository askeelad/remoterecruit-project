export interface Feature {
    text: string;
    included: boolean;
}

export interface PackageCardProps {
    price: string;
    badgeTitle: string;
    features: Feature[];
    paidpackage: boolean;
}
