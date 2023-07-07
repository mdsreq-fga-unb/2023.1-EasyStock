import orderService from "../src/services/order.service";
import Order from "../src/models/Order";

jest.mock("../src/models/Order", () => ({
  create: jest.fn(),
  find: jest.fn(),
}));

describe("createService", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  it('Criar pedido', async () => {
    const mockOrder = {};

    Order.create.mockResolvedValue(mockOrder);

    const result = await orderService.createService(mockOrder);

    expect(Order.create).toHaveBeenCalledTimes(1);
    expect(Order.create).toHaveBeenCalledWith(mockOrder);
    expect(result).toEqual(mockOrder);
  });

  it('Erro caso a criação do pedido falhe', async () => {
    const mockOrder = {};
    const mockError = new Error('Falha ao criar pedido');

    Order.create.mockRejectedValue(mockError);

    await expect(orderService.createService(mockOrder)).rejects.toThrowError(mockError);
  });
});

describe('findAllService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return all orders with client names sorted by dataPedido in descending order', async () => {
    const mockOrders = [
      { _id: 1, cliente: { nome: 'Client 1' }, dataPedido: '2023-07-01' },
      { _id: 2, cliente: { nome: 'Client 2' }, dataPedido: '2023-07-02' },
      { _id: 3, cliente: { nome: 'Client 3' }, dataPedido: '2023-07-03' },
    ];

    Order.find.mockReturnValue({
      populate: jest.fn().mockReturnValue({
        sort: jest.fn().mockResolvedValueOnce(mockOrders),
      }),
    });

    const expectedResult = mockOrders;

    const result = await orderService.findAllService();

    expect(Order.find).toHaveBeenCalled();
    expect(Order.find().populate).toHaveBeenCalledWith('cliente', 'nome');
    expect(Order.find().populate().sort).toHaveBeenCalledWith({ 'dataPedido': -1 });
    expect(result).toEqual(expectedResult);
  });
});


