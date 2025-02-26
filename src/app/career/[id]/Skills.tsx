const Skills = ({ skills }: any) => {
    return ( 
        <div>
        {
            skills.map((item: any,index:any) => (
                <p key={item} className="fw-light">{index+1 } - {item}</p>
            ))
        }
        </div>
     );
}
 
export default Skills;
