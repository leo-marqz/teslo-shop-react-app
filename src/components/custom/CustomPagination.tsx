import { useSearchParams } from "react-router";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
    totalPages: number;
}

export default function CustomPagination({ totalPages }: Props) {

    const [searchParams, setSearchParams] = useSearchParams();

    const queryPage = searchParams.get('page') || 1;
    const page = isNaN(+queryPage) ? 1 : +queryPage;

    const handlePageChange = (page: number) => {
        if (page < 1 || page > totalPages) return;
        searchParams.set('page', page.toString());
        setSearchParams(searchParams);
    }

    return (
        <div className="flex items-center justify-center space-x-2">
            <Button
                variant='outline'
                size='sm'
                disabled={page === 1}
                onClick={() => handlePageChange(page - 1)}
            >
                <ChevronLeft /> Anteriores
            </Button>

            {
                Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                        key={index}
                        variant={page === index + 1 ? 'default' : 'outline'}
                        size='sm'
                        disabled={page === index + 1}
                    >
                        {index + 1}
                    </Button>
                ))
            }

            <Button
                variant='outline'
                size='sm'
                disabled={page === totalPages}
                onClick={() => handlePageChange(page + 1)}
            >
                Siguientes <ChevronRight />
            </Button>
        </div>
    );
};
