import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Minus, Plus } from "lucide-react";
import { getProductById } from "@/data/products";

interface ProductInfoProps {
  productId?: number;
}

// Price multipliers based on length (longer = more expensive)
const lengthMultipliers: Record<string, number> = {
  '14"': 1.0, '16"': 1.1, '18"': 1.2, '20"': 1.35, '22"': 1.5,
  '24"': 1.7, '26"': 1.9, '28"': 2.1, '30"': 2.35, '32"': 2.6,
  '34"': 2.85, '36"': 3.1, '38"': 3.4, '40"': 3.7,
};

// Price multipliers based on weight
const weightMultipliers: Record<string, number> = {
  '50g': 0.6, '60g': 0.7, '100g': 1.0, '120g': 1.15, '150g': 1.4,
  '160g': 1.45, '180g': 1.6, '200g': 1.8, '220g': 1.9, '250g': 2.1,
  '300g': 2.5, '400g': 3.2,
};

const ProductInfo = ({ productId }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedLength, setSelectedLength] = useState<string>("");
  const [selectedWeight, setSelectedWeight] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const product = productId ? getProductById(productId) : null;
  
  const name = product?.name || "Straight Virgin Bundles";
  const category = product?.category || "Bundles";
  const basePrice = product?.priceNum || 85;
  const lengths = product?.lengths || ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""];
  const weights = product?.weights || ["100g", "150g", "200g"];
  const colors = product?.colors || ["Natural Black #1B"];

  const calculatedPrice = useMemo(() => {
    const lengthMult = selectedLength ? (lengthMultipliers[selectedLength] || 1) : 1;
    const weightMult = selectedWeight ? (weightMultipliers[selectedWeight] || 1) : 1;
    return Math.round(basePrice * lengthMult * weightMult);
  }, [basePrice, selectedLength, selectedWeight]);

  const hasSelections = selectedLength || selectedWeight;

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="space-y-6">
      <div className="hidden lg:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbLink asChild><Link to={`/category/${category.toLowerCase()}`}>{category}</Link></BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem><BreadcrumbPage>{name}</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-body font-light text-muted-foreground mb-1 tracking-wide uppercase">{category}</p>
            <h1 className="text-2xl md:text-3xl font-light text-foreground" style={{ fontFamily: 'Cormorant Garamond, serif' }}>{name}</h1>
          </div>
          <div className="text-right">
            {hasSelections ? (
              <div>
                <p className="text-2xl font-body font-semibold text-foreground">${calculatedPrice}</p>
                <p className="text-xs font-body text-muted-foreground">Shipping calculated at checkout</p>
              </div>
            ) : (
              <div>
                <p className="text-xl font-body font-light text-foreground">from ${basePrice}</p>
                <p className="text-xs font-body text-muted-foreground">Select options for exact price</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Length selector */}
      <div className="space-y-3 py-4 border-b border-border">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-body font-medium text-foreground">Length</h3>
          {selectedLength && (
            <span className="text-xs font-body text-muted-foreground">Selected: {selectedLength}</span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {lengths.map(length => (
            <button
              key={length}
              onClick={() => setSelectedLength(length)}
              className={`px-3 py-2 text-xs font-body border transition-colors duration-200 ${
                selectedLength === length 
                  ? 'border-primary bg-primary text-primary-foreground' 
                  : 'border-border text-foreground hover:border-primary'
              }`}
            >
              {length}
            </button>
          ))}
        </div>
      </div>

      {/* Weight selector */}
      <div className="space-y-3 py-4 border-b border-border">
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-body font-medium text-foreground">Weight</h3>
          {selectedWeight && (
            <span className="text-xs font-body text-muted-foreground">Selected: {selectedWeight}</span>
          )}
        </div>
        <div className="flex flex-wrap gap-2">
          {weights.map(weight => (
            <button
              key={weight}
              onClick={() => setSelectedWeight(weight)}
              className={`px-3 py-2 text-xs font-body border transition-colors duration-200 ${
                selectedWeight === weight 
                  ? 'border-primary bg-primary text-primary-foreground' 
                  : 'border-border text-foreground hover:border-primary'
              }`}
            >
              {weight}
            </button>
          ))}
        </div>
      </div>

      {/* Color selector */}
      <div className="space-y-3 py-4 border-b border-border">
        <h3 className="text-sm font-body font-medium text-foreground">Color</h3>
        <div className="flex flex-wrap gap-2">
          {colors.map(color => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-3 py-2 text-xs font-body border transition-colors duration-200 ${
                selectedColor === color 
                  ? 'border-primary bg-primary text-primary-foreground' 
                  : 'border-border text-foreground hover:border-primary'
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-body font-light text-foreground">Quantity</span>
          <div className="flex items-center border border-border">
            <Button variant="ghost" size="sm" onClick={decrementQuantity} className="h-10 w-10 p-0 hover:bg-transparent hover:opacity-50 rounded-none border-none">
              <Minus className="h-4 w-4" />
            </Button>
            <span className="h-10 flex items-center px-4 text-sm font-body font-light min-w-12 justify-center border-l border-r border-border">
              {quantity}
            </span>
            <Button variant="ghost" size="sm" onClick={incrementQuantity} className="h-10 w-10 p-0 hover:bg-transparent hover:opacity-50 rounded-none border-none">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
          {hasSelections && (
            <span className="text-sm font-body font-semibold text-foreground ml-auto">
              Total: ${calculatedPrice * quantity}
            </span>
          )}
        </div>

        <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary-hover font-body font-medium tracking-wide rounded-none">
          Add to Bag {hasSelections ? `— $${calculatedPrice * quantity}` : ''}
        </Button>
        
        <div className="text-center space-y-1">
          <p className="text-xs font-body text-muted-foreground">✓ Shipping calculated at checkout</p>
          <p className="text-xs font-body text-muted-foreground">✓ 30-day quality guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
