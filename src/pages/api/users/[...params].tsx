import { NextApiResponse, NextApiRequest } from 'next';

export default (request: NextApiRequest, response: NextApiResponse) => {
    console.log(request.query)

    const users = [
        { id: 1, name: 'Lucas' },
        { id: 2, name: 'Paula' },
        { id: 3, name: 'Tiago' },
    ]

    return response.json(users)
}