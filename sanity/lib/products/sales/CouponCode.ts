export const COUPON_CODES = {
    HSPECIAL: "HSPECIAL",
    DWLI2025: "DOFFER",
    NYR2026: "NY2026",
} as const;

export type CouponCode = keyof typeof COUPON_CODES;