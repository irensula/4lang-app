import Task from './Task';
export default function ToggleContent({show}) {

    return (
      <div>
       {show && 
        <div>
          <Task text="The second text"/>
        </div>
        
        } 
      </div>
    );
  }