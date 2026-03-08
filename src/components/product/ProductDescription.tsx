import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import ReviewProduct from "./ReviewProduct";
import { getProductById } from "@/data/products";

const CustomStar = ({ filled, className }: { filled: boolean; className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 20 20" 
    fill="currentColor" 
    className={`w-3 h-3 ${filled ? 'text-foreground' : 'text-muted-foreground/30'} ${className}`}
  >
    <path 
      fillRule="evenodd" 
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" 
      clipRule="evenodd" 
    />
  </svg>
);

interface ProductDescriptionProps {
  productId?: number;
}

const ProductDescription = ({ productId }: ProductDescriptionProps) => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);
  const [isCareOpen, setIsCareOpen] = useState(false);
  const [isReviewsOpen, setIsReviewsOpen] = useState(false);

  const product = productId ? getProductById(productId) : null;
  const description = product?.description || "Premium quality 100% virgin human hair.";

  return (
    <div className="space-y-0 mt-8 border-t border-border">
      {/* Description */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-body font-light rounded-none"
        >
          <span>Description</span>
          {isDescriptionOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isDescriptionOpen && (
          <div className="pb-6 space-y-4">
            <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>

      {/* Hair Details */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsDetailsOpen(!isDetailsOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-body font-light rounded-none"
        >
          <span>Hair Details</span>
          {isDetailsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isDetailsOpen && (
          <div className="pb-6 space-y-2">
            <p className="text-sm font-body font-light text-muted-foreground">• Hair Type: 100% Virgin Human Hair</p>
            <p className="text-sm font-body font-light text-muted-foreground">• Hair Grade: 12A Premium</p>
            <p className="text-sm font-body font-light text-muted-foreground">• Can be bleached, colored & heat styled</p>
            <p className="text-sm font-body font-light text-muted-foreground">• Tangle-free and minimal shedding</p>
            <p className="text-sm font-body font-light text-muted-foreground">• Cuticle aligned for longevity</p>
            <p className="text-sm font-body font-light text-muted-foreground">• Lifespan: 12-18 months with proper care</p>
          </div>
        )}
      </div>

      {/* Care Instructions */}
      <div className="border-b border-border">
        <Button
          variant="ghost"
          onClick={() => setIsCareOpen(!isCareOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-body font-light rounded-none"
        >
          <span>Care Instructions</span>
          {isCareOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isCareOpen && (
          <div className="pb-6 space-y-2">
            <p className="text-sm font-body font-light text-muted-foreground">• Wash with sulfate-free shampoo</p>
            <p className="text-sm font-body font-light text-muted-foreground">• Deep condition weekly</p>
            <p className="text-sm font-body font-light text-muted-foreground">• Use heat protectant before styling</p>
            <p className="text-sm font-body font-light text-muted-foreground">• Air dry or blow dry on low heat</p>
            <p className="text-sm font-body font-light text-muted-foreground">• Store on silk/satin when not in use</p>
          </div>
        )}
      </div>

      {/* Customer Reviews */}
      <div className="border-b border-border lg:mb-16">
        <Button
          variant="ghost"
          onClick={() => setIsReviewsOpen(!isReviewsOpen)}
          className="w-full h-14 px-0 justify-between hover:bg-transparent font-body font-light rounded-none"
        >
          <div className="flex items-center gap-3">
            <span>Customer Reviews</span>
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <CustomStar key={star} filled={star <= 4.8} />
              ))}
              <span className="text-sm font-body font-light text-muted-foreground ml-1">4.9</span>
            </div>
          </div>
          {isReviewsOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
        {isReviewsOpen && (
          <div className="pb-6 space-y-6">
            <ReviewProduct />
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (<CustomStar key={star} filled={true} />))}
                  </div>
                  <span className="text-sm font-body font-light text-muted-foreground">Jasmine K.</span>
                </div>
                <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
                  "This hair is absolutely gorgeous! Silky smooth, no shedding at all. I've had it installed for 3 months and it still looks brand new. Will definitely be ordering again!"
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (<CustomStar key={star} filled={true} />))}
                  </div>
                  <span className="text-sm font-body font-light text-muted-foreground">Destiny M.</span>
                </div>
                <p className="text-sm font-body font-light text-muted-foreground leading-relaxed">
                  "Best virgin hair I've ever purchased! The quality is unmatched. I colored it honey blonde and it took the color beautifully. 100% recommend Naya Hair."
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDescription;
