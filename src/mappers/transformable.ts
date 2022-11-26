export interface MapperTransformer<T, S> {
    transform(t: T): S;
}