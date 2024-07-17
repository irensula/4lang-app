function Entry(props) {
    return(
        <div className="term">
          <p>
            {props.ukrainian}
          </p>
          <p>
            {props.russian}
          </p>
          <p>
            {props.finnish}
          </p>
          <p>
            {props.english}
          </p>
        </div>
    )
}

export default Entry;