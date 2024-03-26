const Card = ({ title, description }: { title: string, description: string }) => {
    return (
        <div className="block w-full  p-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-4 text-3xl max-sm:text-xl max-lg-text-xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="text-lg  font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
    )
}

export default Card
