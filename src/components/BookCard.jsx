
const BookCard = ({book}) => {
    return (
        <div className="flex flex-col p-3 w-[50%] md:w-[20%] border-[0.25px] items-center justify-center xs:w-[100%] text-primary">
            <img className="w-[140px] h-[140px]" src={book.image} alt={book.title} />
            <p className="text-prinmay text-small pt-2">{book.title}</p>
            <p className="text-prinmay text-small font-bold">{book.writer}</p>
            <div className="flex gap-3 flex-wrap text-xs">
                {book.tag.map((t, index)=> (
                    <span key={`tag-${index}`} className="border-[0.25px] rounded-xl p-2">{t}</span>
                ))}
            </div>
            <p className="text-secondary text-small flex self-end">${book.price}</p>
        </div>
    )
}

export default BookCard