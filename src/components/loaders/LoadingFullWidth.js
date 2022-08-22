const LoadingFullWidth = () => {
    return (
        <div className="animate-pulse mt-4 max-w-full mx-auto grid lg:grid-cols-3 gap-2  items-start">
            <div className="col-span-2 p-4 rounded-lg bg-gray-200 dark:bg-dark-third lg:mx-4 py-4" />
            <div className="lg:row-span-3 bg-gray-200 dark:bg-dark-third rounded-lg w-full lg:col-span-1 col-span-3 py-16" />
            <div className="col-span-2 p-4 rounded-lg bg-gray-200 dark:bg-dark-third lg:mx-4 py-4" />
            <div className="col-span-2 p-4 rounded-lg bg-gray-200 dark:bg-dark-third lg:mx-4 py-4" />
        </div>
    );
};

export default LoadingFullWidth;
