module.exports = function parseStringArray(array_as_string) {
    return array_as_string.split(',').map(tech => tech.trim());
}