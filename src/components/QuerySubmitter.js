import React from "react";
import { observer } from "mobx-react";
import { reset, buildSearchQuery } from "../../mobx/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const QuerySubmitter = () => {
	return (
		<div className="querySubmitter">
			<button className="btn-grey" onClick={() => buildSearchQuery()}>
				<FontAwesomeIcon icon={faSearch} /> Search
			</button>
			<button className="btn-grey" onClick={() => reset()}>
				Reset
			</button>
		</div>
	);
};

export default observer(QuerySubmitter);
