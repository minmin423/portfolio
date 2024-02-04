import SkillCard from "./SkillCard"

function SkillBox(props) {

    return(
        <div className="flex flex-col items-center border rounded-lg w-full shadow-xl">
            <h2 className="text-xl font-semibold py-1 bg-blue-50 w-full rounded-t-lg text-center">{props.title}</h2>

            <div className="flex flex-col w-full h-full">
                {props.icons.map((icon, index) => (
                    <SkillCard key={index} logo={icon.logo} name={icon.name} />
                ))}
            </div>
        </div>
    )
}

export default SkillBox