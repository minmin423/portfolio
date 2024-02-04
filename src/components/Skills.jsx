import SkillBox from "./SkillBox"

function Skills() {

    return(
    <div id='Skills' className='bg-white h-fit w-full px-2 md:px-6 lg:px-20 pb-32 pt-20'>
        <h1 className='text-center pb-6 font-semibold text-5xl'>Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillBox title="Front-end"
                icons={[
                    {logo: "logos:vue", name: "Vue"},
                    {logo: "logos:nuxt-icon", name: "Nuxt"},
                    {logo: "logos:react", name: "React"},
                    {logo: "devicon:tailwindcss", name: "Tailwind"}
                ]} />

            <SkillBox title="Back-end"
                icons={[
                    {logo: "simple-icons:express", name: "Express"},
                    {logo: "logos:laravel", name: "Laravel"},
                    {logo: "logos:php", name: "PHP"},
                    {logo: "logos:firebase", name: "Firebase"}
                ]} />

            <div>
                <SkillBox title="Databases"
                    icons={[
                        {logo: "vscode-icons:file-type-mongo", name: "MongoDB"},
                        {logo: "devicon:mysql", name: "MySQL"},
                    ]} />
                
                <br />

                <SkillBox title="Others"
                    icons={[
                        {logo: "bi:github", name: "Github"},
                        {logo: "flat-color-icons:linux", name: "Linux"}
                    ]} />
            </div>
        </div>
    </div>
    )
}

export default Skills