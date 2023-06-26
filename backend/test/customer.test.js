import Customer from "../src/models/Customer";
import customerService from "../src/services/customer.service";

jest.mock("../src/models/Customer", () => ({
  create: jest.fn(),
}));

describe("createService", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should create a new customer in the database", async () => {
    const mockCustomer = {
      name: "John Doe",
      email: "johndoe@example.com",
    };

    const mockCreatedCustomer = {
      _id: "1234567890",
      name: "John Doe",
      email: "johndoe@example.com",
    };

    Customer.create.mockResolvedValue(mockCreatedCustomer);

    //const result = await createService(mockCustomer);
    const result = await customerService.createService(mockCustomer);


    expect(Customer.create).toHaveBeenCalledWith(mockCustomer);
    expect(result).toEqual(mockCreatedCustomer);
  });

  it("should throw an error if customer creation fails", async () => {
    const mockCustomer = {
      name: "John Doe",
      email: "johndoe@example.com",
    };

    const mockError = new Error("Failed to create customer");

    Customer.create.mockRejectedValue(mockError);

    //await expect(createService(mockCustomer)).rejects.toThrowError(mockError);
    await expect(customerService.createService(mockCustomer)).rejects.toThrowError(mockError);
  });
});
