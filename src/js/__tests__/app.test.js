import ErrorRepository from "../app";

describe("ErrorRepository", () => {
    let repository;

    beforeEach(() => {
        repository = new ErrorRepository();
        repository.addError(404, 'Not Found');
        repository.addError(500, 'Internal Server Error');
    })

    test('проверка на вывод описания ошибки по ее коду', () => {
        expect(repository.translate(404)).toBe('Not Found');
        expect(repository.translate(500)).toBe('Internal Server Error');
        expect(repository.translate(200)).toBe('Unknown error');
    })
})