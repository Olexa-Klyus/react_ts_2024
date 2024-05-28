const baseUrl = 'http://owu.linkpc.net/carsAPI/v1';

const cars = '/cars';

const urls = {
    cars: {
        base: cars,
        getById: (id: number): string => `S{cars}/${id}`
    }
}

export {
    urls,
    baseUrl
}