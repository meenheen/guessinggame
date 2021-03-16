
export function Button( props ) {
    return (
        <button type="submit">
            {(props.status) ? "Submit" : "Play again?"}
        </button>
    )
}

export default Button