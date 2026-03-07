// ─── Real ABB spare parts extracted from robotspare.in ───────────────────────
// Other brands use representative part numbers for now.

export interface SparePart {
    id: string;
    partNumber: string;
    name: string;
    brand: string;
    category: string;
    image?: string;
}

// ─── Subcategories ────────────────────────────────────────────────────────────
export const subcategories = [
    "Lubrication",
    "Controller",
    "Manipulator",
    "Harness",
    "Control & Power Cable",
];

// ─── Brand definitions ────────────────────────────────────────────────────────
export interface Brand {
    name: string;
}

export const brands: Brand[] = [
    { name: "ABB" },
    { name: "Siemens" },
    { name: "Mitsubishi" },
    { name: "Omron" },
    { name: "Rockwell" },
    { name: "Schneider" },
    { name: "L&T" },
    { name: "Eaton" },
    { name: "Delta" },
    { name: "FANUC" },
    { name: "KUKA" },
    { name: "Yaskawa" },
    { name: "Kawasaki" },
    { name: "AMR / AGV" },
];

// ─── ABB parts (real data from robotspare.in) ────────────────────────────────
const abbParts: SparePart[] = [
    // ─── Lubrication 
    { id: "ABB-LUB-1", partNumber: "3HAC032140-004", name: "ABB Lubrication Unit", brand: "ABB", category: "Lubrication", image: "https://cdn2.zohoecommerce.com/product-images/TMO+150.jpeg/1677002000000138901/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-LUB-2", partNumber: "3HAC043226-002", name: "ABB Gear Lubricant Assembly", brand: "ABB", category: "Lubrication", image: "https://cdn2.zohoecommerce.com/product-images/9IBA251396_400x400.jpg/1677002000000528021/400x400?storefront_domain=www.robotspare.in" }, // Fallback to a valid image
    { id: "ABB-LUB-3", partNumber: "3HAC042564-001", name: "ABB Grease Cartridge Module", brand: "ABB", category: "Lubrication" },
    { id: "ABB-LUB-4", partNumber: "3HAC042534-00", name: "ABB Lubrication Pump Unit", brand: "ABB", category: "Lubrication" },
    { id: "ABB-LUB-5", partNumber: "3HAC042471-001", name: "ABB Central Lubrication System", brand: "ABB", category: "Lubrication", image: "https://cdn2.zohoecommerce.com/product-images/9IBA222857_400x400.jpg/1677002000001168042/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-LUB-6", partNumber: "11712016-604", name: "ABB Lubrication Kit", brand: "ABB", category: "Lubrication", image: "https://cdn2.zohoecommerce.com/product-images/9IBA107075_400x400.jpg/1677002000001168098/400x400?storefront_domain=www.robotspare.in" },

    // ─── Controller 
    { id: "ABB-CTR-1", partNumber: "3HAC029818-001", name: "DSQC 663 Controller Board", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/presentation_72cdcb23-eccd-46e9-8040-4c0e70d8e90f_715x539.jpg/1677002000000023618/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-2", partNumber: "3HAC026585-001", name: "ABB Drive Unit Controller", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/Ultra+CAP.jpg/1677002000000307025/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-3", partNumber: "3HAC050363-001", name: "ABB Controller Power Supply", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/images.jpg/1677002000000858013/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-4", partNumber: "3HAC028357-001", name: "ABB Safety Controller Module", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/DSQC679.jpg/1677002000000138879/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-5", partNumber: "3HAC025917-001", name: "ABB Axis Computer Board", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/download.jpeg/1677002000000476577/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-6", partNumber: "3HAC031683-001", name: "ABB Servo Drive Module", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA224661_400x400.jpg/1677002000000476557/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-7", partNumber: "3HAC025466-001", name: "ABB Communication Board", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA224613_400x400.jpg/1677002000000476537/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-8", partNumber: "3HAC031670-001", name: "ABB I/O Module Controller", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA207671_400x400.jpg/1677002000000476517/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-9", partNumber: "3HAC043383-001", name: "ABB Main Computer Unit", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA207706_400x400.jpg/1677002000000476497/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-10", partNumber: "3HAC024488-001", name: "ABB Rectifier Board", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA207617_400x400.jpg/1677002000000476353/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-11", partNumber: "3HAC025562-001", name: "ABB Capacitor Module", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA224616_400x400.jpg/1677002000000476193/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-12", partNumber: "3HAC032586-001", name: "ABB Brake Relay Board", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA224664_400x400.jpg/1677002000000476393/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-13", partNumber: "3HAC046408-001", name: "ABB Panel Board Controller", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/download+%281%29.jpeg/1677002000000476293/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-14", partNumber: "3HAC13389-2", name: "ABB Serial Measurement Board", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/DSQC+611+Contactor+Unit.jpg/1677002000000307081/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-15", partNumber: "3HAC14178-1", name: "ABB Robot Computer Board DSQC", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA208009_400x400.jpg/1677002000000476373/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-16", partNumber: "3HAC024144-001", name: "ABB Power Distribution Board", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA231714_400x400.jpg/1677002000000476457/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-17", partNumber: "3HAC12815-1", name: "ABB Resolver Interface Board", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA207734_400x400.jpg/1677002000000476233/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-18", partNumber: "3HAC14551-2", name: "ABB Teach Pendant Board", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA222217_400x400.jpg/1677002000000307189/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-19", partNumber: "3HAC041443-003", name: "ABB Inverter Module", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/download.jpeg/1677002000000476253/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-20", partNumber: "3HAC020466-001", name: "ABB Motor Supply Unit", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA208110_400x400.jpg/1677002000000476211/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-21", partNumber: "3HAC025465-011", name: "ABB Axis Drive Board", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/31VQ9Hq8psL.jpg/1677002000000307219/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-22", partNumber: "3HAC048500-001", name: "ABB Control Module Assembly", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA260370_400x400.jpg/1677002000000476177/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-23", partNumber: "3HAC026525-001", name: "ABB Contactor Module", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA224628_400x400.jpg/1677002000000307103/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-24", partNumber: "3HAC037084-001", name: "ABB Safety Board Unit", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA224685_400x400.jpg/1677002000000307153/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-25", partNumber: "E3HAC14549-3", name: "ABB Exchange Unit Controller", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA224951_400x400.jpg/1677002000000476159/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-26", partNumber: "E3HAC025338-006", name: "ABB Exchange Drive Module", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA048619_400x400.jpg/1677002000000476109/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-27", partNumber: "IRC5 Controller", name: "ABB IRC5 Controller Unit", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/IRC5.png/1677002000000346047/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-28", partNumber: "3HAC029157-001", name: "ABB Motor Module Controller", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/9IBA207659_400x400.jpg/1677002000000476629/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CTR-29", partNumber: "3HAC047184-003", name: "ABB Power Supply Controller", brand: "ABB", category: "Controller", image: "https://cdn2.zohoecommerce.com/product-images/17_RM_3HAC047184-003_1.jpg/1677002000000499019/400x400?storefront_domain=www.robotspare.in" },

    // ─── Manipulator 
    { id: "ABB-MAN-1", partNumber: "3HAC065020-001", name: "ABB Manipulator Gearbox", brand: "ABB", category: "Manipulator", image: "https://cdn2.zohoecommerce.com/product-images/9IBA260379_400x400.jpg/1677002000000476333/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-MAN-2", partNumber: "3HAC058991-005", name: "ABB Robot Arm Assembly", brand: "ABB", category: "Manipulator", image: "https://cdn2.zohoecommerce.com/product-images/9IBA243938_400x400.jpg/1677002000000476437/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-MAN-3", partNumber: "3HAC057980-006", name: "ABB Wrist Assembly Module", brand: "ABB", category: "Manipulator", image: "https://cdn2.zohoecommerce.com/product-images/9IBA243938_400x400.jpg/1677002000000476413/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-MAN-4", partNumber: "3HAC062339-004", name: "ABB Upper Arm Structure", brand: "ABB", category: "Manipulator", image: "https://cdn2.zohoecommerce.com/product-images/9IBA260195_400x400.jpg/1677002000000476273/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-MAN-5", partNumber: "IRB 6700", name: "ABB IRB 6700 Industrial Robot", brand: "ABB", category: "Manipulator", image: "https://cdn2.zohoecommerce.com/product-images/presentation_72cdcb23-eccd-46e9-8040-4c0e70d8e90f_715x539.jpg/1677002000000023618/400x400?storefront_domain=www.robotspare.in" }, // Fallback to ABB generic
    { id: "ABB-MAN-6", partNumber: "3HAC055447-006", name: "ABB Lower Arm Assembly", brand: "ABB", category: "Manipulator", image: "https://cdn2.zohoecommerce.com/product-images/9IBA251402_400x400.jpg/1677002000000604019/400x400?storefront_domain=www.robotspare.in" },

    // ─── Harness 
    { id: "ABB-HAR-1", partNumber: "3HAB8440-1", name: "ABB Robot Cable Harness", brand: "ABB", category: "Harness", image: "https://cdn2.zohoecommerce.com/product-images/IRB+1410+Harness.jpg/1677002000000476039/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-HAR-2", partNumber: "3HAC1855-1", name: "ABB Internal Harness Assembly", brand: "ABB", category: "Harness", image: "https://cdn2.zohoecommerce.com/product-images/9IBA204556_400x400.jpg/1677002000000476063/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-HAR-3", partNumber: "3HAC022544-008", name: "ABB Upper Arm Harness", brand: "ABB", category: "Harness", image: "https://cdn2.zohoecommerce.com/product-images/9IBA207597_400x400.jpg/1677002000000307043/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-HAR-4", partNumber: "3HAC043963-001", name: "ABB Manipulator Harness Kit", brand: "ABB", category: "Harness", image: "https://cdn2.zohoecommerce.com/product-images/IRB+4600+Harness.jpg/1677002000000307007/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-HAR-5", partNumber: "3HAC14139-1", name: "ABB Wrist Harness Cable", brand: "ABB", category: "Harness", image: "https://cdn2.zohoecommerce.com/product-images/9IBA207750_400x400.jpg/1677002000000476139/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-HAR-6", partNumber: "3HAC042840-001", name: "ABB Dress Pack Harness", brand: "ABB", category: "Harness", image: "https://cdn2.zohoecommerce.com/product-images/9IBA251396_400x400.jpg/1677002000000528021/400x400?storefront_domain=www.robotspare.in" },

    // ─── Control & Power Cable 
    { id: "ABB-CAB-1", partNumber: "3HAC026787-004", name: "ABB Control & Power Cable Assembly", brand: "ABB", category: "Control & Power Cable", image: "https://cdn2.zohoecommerce.com/product-images/9IBA224932_master.jpg/1677002000000144037/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CAB-2", partNumber: "3HAC7998-1", name: "ABB Floor Cable Set", brand: "ABB", category: "Control & Power Cable", image: "https://cdn2.zohoecommerce.com/product-images/images.jpeg/1677002000000476597/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CAB-3", partNumber: "3HAC026787-001", name: "ABB IRC5 Power Cable", brand: "ABB", category: "Control & Power Cable", image: "https://cdn2.zohoecommerce.com/product-images/Control+cable+power+7m.jpg/1677002000000144007/400x400?storefront_domain=www.robotspare.in" },
    { id: "ABB-CAB-4", partNumber: "3HAC2493-1", name: "ABB Signal Cable Assembly", brand: "ABB", category: "Control & Power Cable", image: "https://cdn2.zohoecommerce.com/product-images/9IBA207778_720x540_f44bb9a4-d1fb-48a8-be6b-79e823580c2a.webp/1677002000000144049/400x400?storefront_domain=www.robotspare.in" },
];

// ─── Helper: generate placeholder parts for non-ABB brands ───────────────────
function generateBrandParts(brandName: string, prefix: string): SparePart[] {
    const parts: SparePart[] = [];
    const categoryPartNames: Record<string, string[]> = {
        "Lubrication": ["Lubrication Unit", "Grease Cartridge", "Lube Pump Assembly"],
        "Controller": ["Main Controller", "Servo Drive Unit", "Power Supply Module", "Safety Controller", "I/O Board", "Communication Module"],
        "Manipulator": ["Gearbox Assembly", "Arm Structure", "Wrist Module", "Lower Arm Unit"],
        "Harness": ["Cable Harness Kit", "Internal Harness", "Dress Pack Cable"],
        "Control & Power Cable": ["Power Cable Set", "Signal Cable Assembly", "Control Cable Kit"],
    };

    subcategories.forEach((cat) => {
        const names = categoryPartNames[cat] || ["Spare Part"];
        names.forEach((name, j) => {
            const suffix = String(1000 + j * 3 + 1).padStart(4, "0");
            parts.push({
                id: `${brandName}-${cat.slice(0, 3)}-${j + 1}`,
                partNumber: `${prefix}${suffix}-00${j + 1}`,
                name: `${brandName} ${name}`,
                brand: brandName,
                category: cat,
            });
        });
    });

    return parts;
}

// ─── Build the complete parts list ───────────────────────────────────────────
const otherBrandParts: SparePart[] = [
    ...generateBrandParts("Siemens", "6ES7-"),
    ...generateBrandParts("Mitsubishi", "MR-J4-"),
    ...generateBrandParts("Omron", "E2E-X-"),
    ...generateBrandParts("Rockwell", "25B-D-"),
    ...generateBrandParts("Schneider", "ATV3-"),
    ...generateBrandParts("L&T", "LT-MX-"),
    ...generateBrandParts("Eaton", "ETC-"),
    ...generateBrandParts("Delta", "DVP-"),
    ...generateBrandParts("FANUC", "A06B-"),
    ...generateBrandParts("KUKA", "KRC4-"),
    ...generateBrandParts("Yaskawa", "SGDV-"),
    ...generateBrandParts("Kawasaki", "50607-"),
    ...generateBrandParts("AMR / AGV", "AGV-"),
];

export const allParts: SparePart[] = [...abbParts, ...otherBrandParts];
