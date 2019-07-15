import React, { Component } from "react";
import PropTypes from "prop-types";

/**
 * A component that can render a list of components as a single joined element
 * See JoinedList.propTypes for the props that this takes
 */
class JoinedList extends Component {
	render() {
		let list;
		if (this.props.list === undefined || this.props.list.length === 0) {
			list = this.props.emptyFiller;
		} else {
			list = this.props.list;
		}

		return (
			<React.Fragment>
				{this.doWrapList(this.joinList(list))}
			</React.Fragment>
		);
	}

	// Wraps the elements in the list, applies the separator, and joins the list
	// Returns the joined list
	joinList(list) {
		if (!Array.isArray(list)) {
			return list;
		}

		let wrappedElemList =
			typeof this.props.wrapElem === "function"
				? list.map((elem, index, array) =>
						this.props.wrapElem(elem, index, array)
				  )
				: list;

		return wrappedElemList.reduce((accu, elem, currentIndex) => {
			// If separator is a function, invoke it
			let separator = this.props.separator;
			if (typeof separator === "function") {
				separator = separator(elem, currentIndex); // Invokes the separator function on the wrappedElem
			}
			return accu === null ? [elem] : [...accu, separator, elem];
		}, null);
	}

	// Perform the wrapList function logic
	// Returns the wrapped list
	doWrapList(list) {
		if (typeof this.props.wrapList !== "function") {
			return list;
		}

		// Check whether the wrapping should be omitted for other reasons
		if (
			(!Array.isArray(list) || list.length === 0) &&
			this.props.emptyFiller === undefined &&
			this.props.forceWrapList === undefined
		) {
			return list;
		}

		return this.props.wrapList(list);
	}
}

JoinedList.propTypes = {
	// The list of elements to render. If undefined or empty, the emptyFiller prop is rendered
	list: PropTypes.array,

	// A callback function to define how to format each element in the list (e.g. wrap the element in <li> tags)
	// Takes the same args as the callback in Array.prototype.map(function callback(currentValue[, index[, array]])
	// By default, is left undefined and function is skipped.
	wrapElem: PropTypes.func,

	// A callback function to define how to format the entire list (e.g. wrap the list in <ul> tags), taking one argument:
	//	list: The list that will be formatted
	// This function will not execute if ALL of the following are met:
	//	The list is empty, emptyFiller is undefined, AND forceWrapList is undefined
	// By default, is left undefined and function is skipped.
	wrapList: PropTypes.func,

	// Use to force the function wrapList to execute, regardless if list is empty or not.
	forceWrapList: PropTypes.any,

	// The separator between two elements in the list.
	// Can be set to any type
	// If set to a function, the function is invoked with the following arguments:
	// 	wrappedElem: The element in the list after it has been wrapped by the wrapElem function (if provided)
	//	currentIndex: The index of the current element being processed
	//	array: The array being iterated
	//	returns: value to be used as the separator
	// This can be used to assign unique keys to separator values if the separator is a component
	// By default, set to the string ", "
	separator: PropTypes.any,

	// The result to return in event of the list being empty or not provided.
	emptyFiller: PropTypes.node
};

JoinedList.defaultProps = {
	separator: ", "
};

export default JoinedList;
