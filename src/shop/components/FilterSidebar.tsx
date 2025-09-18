import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import { useSearchParams } from 'react-router';

export default function FilterSidebar() {

    const [ searchParams, setSearchParams ] = useSearchParams();

    const currentSizes = searchParams.get('size')?.split(',') || []; //x, xs, l
    const currentColors = searchParams.get('color');
    const currentPrice = searchParams.get('price') || 'any';

    const handleSizeChange = (size: string) => {
        const newSizes = currentSizes.includes(size) ?
            currentSizes.filter((s) => s !== size) :
            [...currentSizes, size];

        searchParams.set('page', '1');
        searchParams.set('size', newSizes.join(','));
        setSearchParams(searchParams);
    }

    const handlePriceChange = (price: string) => {
        searchParams.set('page', '1');
        searchParams.set('price', price);
        setSearchParams(searchParams);  
    }

    const categories = [
        { id: "tshirts", label: "Camisetas", count: 12 },
        { id: "hoodies", label: "Sudaderas", count: 8 },
        { id: "jackets", label: "Chaquetas", count: 6 },
        { id: "accessories", label: "Accesorios", count: 15 },
    ];

    const sizes = [
        { id: "xs", label: "XS" },
        { id: "s", label: "S" },
        { id: "m", label: "M" },
        { id: "l", label: "L" },
        { id: "xl", label: "XL" },
        { id: "xxl", label: "XXL" },
    ];

    const colors = [
        { id: "black", label: "Negro", color: "bg-black" },
        { id: "white", label: "Blanco", color: "bg-white border" },
        { id: "grey", label: "Gris", color: "bg-gray-400" },
        { id: "navy", label: "Azul Marino", color: "bg-blue-900" },
    ];

    return (
        <div className="w-64 space-y-6">
            <div>
                <h3 className="font-semibold text-lg mb-4">Filtros</h3>
            </div>

            {/* Sizes */}
            <div className="space-y-4">
                <h4 className="font-medium">Tallas</h4>
                <div className="grid grid-cols-3 gap-2">
                    {sizes.map((size) => (
                        <Button
                            key={size.id}
                            variant={ currentSizes.includes(size.label) ? 'default' : 'outline'}
                            size="sm"
                            className="h-8 cursor-pointer"
                            onClick={()=> handleSizeChange(size.label)}
                        >
                            {size.label}
                        </Button>
                    ))}
                </div>
            </div>

            <Separator />

            {/* Price Range */}
            <div className="space-y-4">
                <h4 className="font-medium">Precio</h4>
                <RadioGroup defaultValue="" className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                            value="any" 
                            id="priceAny"
                            className='cursor-pointer'
                            checked={currentPrice === 'any'}
                            onClick={() => handlePriceChange('any')}
                        />
                        <Label htmlFor="priceAny" className="text-sm cursor-pointer">Cualquier precio</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                            className='cursor-pointer'
                            checked={currentPrice === '0-50'}
                            onClick={() => handlePriceChange('0-50')}
                            value="0-50" id="price1" />
                        <Label htmlFor="price1" className="text-sm cursor-pointer">$0 - $50</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                            className='cursor-pointer'
                            checked={currentPrice === '50-100'}
                            onClick={() => handlePriceChange('50-100')}
                            value="50-100" 
                            id="price2" />
                        <Label htmlFor="price2" className="text-sm cursor-pointer">$50 - $100</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                            className='cursor-pointer'
                            checked={currentPrice === '100-200'}
                            onClick={() => handlePriceChange('100-200')}
                            value="100-200" id="price3" />
                        <Label htmlFor="price3" className="text-sm cursor-pointer">$100 - $200</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem 
                            className='cursor-pointer'
                            checked={currentPrice === '200+'}
                            onClick={() => handlePriceChange('200+')}
                            value="200+" id="price4" />
                        <Label htmlFor="price4" className="text-sm cursor-pointer">$200+</Label>
                    </div>
                </RadioGroup>
            </div>
        </div>
    );
}
