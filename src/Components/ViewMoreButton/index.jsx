import clsx from "clsx"
import getImage from "../../Base/Image"
export const ViewMoreButton = ({ className, id, onClick }) => {
    return (
        <button
            className={clsx("flex item-center", className)}
            id={id}
            onClick={onClick}
        >
            <span className="mr-2 text-default-blue text-sm">View More</span>
            <img src={getImage.arrowicon} className="h-5" />
        </button>
    )
}
