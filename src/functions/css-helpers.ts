
export function baseClassAnd(baseClass: string, andProps: { className?: string }, ...modifiers: string[]) {
    const result: string[] = [];
    const usedModifiers = modifiers.filter(x => x.length > 0);
    if (andProps.className) {
        result.push(andProps.className);
        for(const modifier of usedModifiers) {
            result.push(`${andProps.className}--${modifier}`);
        }
    }
    result.push(baseClass);
    for(const modifier of usedModifiers) {
        result.push(`${baseClass}--${modifier}`);
    }
    return result.join(' ');
}




export type ClassableProps = {
    className?: string
}