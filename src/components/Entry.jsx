function Entry(props) {
		return(
			<tbody className="row">
				<tr className="term">
					<td>
						{props.ukrainian}
					</td>
					<td>
						{props.russian}
					</td>
					<td>
						{props.finnish}
					</td>
					<td>
						{props.english}
					</td>
				</tr>
			</tbody>
		);
}

export default Entry;