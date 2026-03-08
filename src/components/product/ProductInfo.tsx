import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Minus, Plus } from "lucide-react";
import { getProductById, calculatePrice } from "@/data/products";

interface ProductInfoProps {
  productId?: number;
}

const ProductInfo = ({ productId }: ProductInfoProps) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedLength, setSelectedLength] = useState<string>("");
  const [selectedWeight, setSelectedWeight] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");

  const product = productId ? getProductById(productId) : null;
  
  const name = product?.name || "Straight Virgin Bundles";
  const category = product?.category || "Bundles";
  const lengths = product?.lengths || ["14\"", "16\"", "18\"", "20\"", "22\"", "24\""];
  const weights = product?.weights || ["100g", "150g", "200g"];
  const colors = product?.colors || ["Natural Black #1B"];

  const currentPrice = useMemo(() => {
    if (!product) return 85;
    return calculatePrice(product, selectedLength || undefined, selectedWeight || undefined);
  }, [product, selectedLength, selectedWeight]);

  const displayPrice = selectedLength || selectedWeight 
    ? `$${currentPrice}` 
    : `from $${product?.priceNum || 85}`;

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
            <p className="text-xl font-body font-light text-foreground">from {price}</p>
          </div>
        </div>
      </div>

      {/* Length selector */}
      <div className="space-y-3 py-4 border-b border-border">
        <h3 className="text-sm font-body font-medium text-foreground">Length</h3>
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
        <h3 className="text-sm font-body font-medium text-foreground">Weight</h3>
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
        </div>

        <Button className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary-hover font-body font-medium tracking-wide rounded-none">
          Add to Bag
        </Button>
        
        <div className="text-center space-y-1">
          <p className="text-xs font-body text-muted-foreground">✓ Free shipping over $150</p>
          <p className="text-xs font-body text-muted-foreground">✓ 30-day quality guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
