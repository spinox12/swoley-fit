import ExerciseCard from "./ExerciseCard";
import SectionWrapper from "./SectionWrapper";

export default function Workout(props) {

    const {workout}=props;

    return(
        <SectionWrapper id={'workout'}  header={"Welcome to"} title={['The',
        'DANGER','zone']}>

            <div className="flex flex-col gap-4">
                 {workout.map((exercise, index)=>{
                      return(
                         <ExerciseCard index={index} exercise={exercise} key={index}/>
                      )
                 })}
            </div>
        </SectionWrapper>
    )
}