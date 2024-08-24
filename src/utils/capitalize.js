const capitalize = (string) => {
    if (!string) return ''; // Handle empty string or undefined
    return string.charAt(0).toUpperCase() + string.slice(1)
}

export default capitalize