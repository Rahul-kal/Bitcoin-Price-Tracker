    type ResultRowProps = {
        loading?: boolean;
    };
    
    export default function ResultRow({ loading }: ResultRowProps) {
        return (
        <div className="relative border min-h-12 border-white/10 rounded-lg 
        bg-blue-950 text-white px-4 py-3 text-lg shadow-sm overflow-hidden">
            <div className="flex gap-4 items-center">
            <div>logo</div>
            <div className="grow">provider name</div>
            <div className="flex gap-2">
                <span className="text-xl text-purple-200/80">0.000</span>
                <span className="text-xl text-purple-200/80">BTC</span>
            </div>
            </div>
            {loading && (
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skeleton-animation pointer-events-none" />
            )}
        </div>
        );
    }
    