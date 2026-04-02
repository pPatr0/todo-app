const request = require('supertest');
const app = require('./server');

describe('Todo API', () => {
  
  test('GET /todos returns empty array initially', async () => {
    const res = await request(app).get('/todos');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  test('POST /todos creates a new todo', async () => {
    const res = await request(app)
      .post('/todos')
      .send({ text: 'Buy milk' });
    expect(res.statusCode).toBe(201);
    expect(res.body.text).toBe('Buy milk');
    expect(res.body.done).toBe(false);
  });

  test('DELETE /todos/:id removes a todo', async () => {
    const post = await request(app)
      .post('/todos')
      .send({ text: 'Test todo' });
    const id = post.body.id;
    const res = await request(app).delete(`/todos/${id}`);
    expect(res.statusCode).toBe(204);
  });

});