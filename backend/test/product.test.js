import productService from "../src/services/product.service";
import Product from "../src/models/Product";

jest.mock("../src/models/Product", () => ({
    create: jest.fn(),
    find: jest.fn(),
    findOne: jest.fn(),
    findById: jest.fn(),
    findOneAndUpdate: jest.fn(),
    findOneAndDelete: jest.fn(),
  }));
  
  describe("productService", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    describe("createService", () => {
      it("Deve criar um produto", async () => {
        const mockProduct = { nome: 'Açaí', precoCusto: 10, precoVenda: 20 };
        const createdProduct = { _id: 'product_id', ...mockProduct };
  
        Product.create.mockResolvedValueOnce(createdProduct);
  
        const result = await productService.createService(mockProduct);
  
        expect(Product.create).toHaveBeenCalledTimes(1);
        expect(Product.create).toHaveBeenCalledWith(mockProduct);
        expect(result).toEqual(createdProduct);
      });
    });
  
    describe("findAllService", () => {
      it("Deve retornar todos os produtos", async () => {
        const mockProducts = [
          { _id: 1, nome: 'Açaí', precoCusto: 20, precoVenda: 40 },
          { _id: 2, nome: 'Leite ninho', precoCusto: 15, precoVenda: 25 },
        ];
  
        Product.find.mockResolvedValueOnce(mockProducts);
  
        const expectedResult = mockProducts;
  
        const result = await productService.findAllService();
  
        expect(Product.find).toHaveBeenCalled();
        expect(result).toEqual(expectedResult);
      });
    });
  
    describe("searchByName", () => {
      it("Deve encontrar produtos pelo nome", async () => {
        const mockName = 'Açaí';
        const mockProducts = [
          { _id: 1, nome: 'Açaí', precoCusto: 20, precoVenda: 40 },
          { _id: 2, nome: 'Leite ninho', precoCusto: 15, precoVenda: 25 },
        ];
  
        Product.find.mockResolvedValueOnce(mockProducts);
  
        const expectedResult = mockProducts;
  
        const result = await productService.searchByName(mockName);
  
        expect(Product.find).toHaveBeenCalledWith({
          nome: { $regex: `${mockName || ''}`, $options: 'i' },
        });
        expect(result).toEqual(expectedResult);
      });
    });
  
    describe("findByPdvService", () => {
      it("Encontrar produto pelo código", async () => {
        const mockPdv = 'pdv_code';
        const mockProduct = { _id: 'product_id', nome: 'Açaí', precoCusto: 20, precoVenda: 40 };
  
        Product.findOne.mockResolvedValueOnce(mockProduct);
  
        const result = await productService.findByPdvService(mockPdv);
  
        expect(Product.findOne).toHaveBeenCalledWith({ codigoPDV: mockPdv });
        expect(result).toEqual(mockProduct);
      });
    });
  
    describe("findByIdService", () => {
      it("Deve encontrar produto pelo ID", async () => {
        const mockId = 'product_id';
        const mockProduct = { _id: mockId, nome: 'Açaí', precoCusto: 20, precoVenda: 40 };
  
        Product.findById.mockResolvedValueOnce(mockProduct);
  
        const result = await productService.findByIdService(mockId);
  
        expect(Product.findById).toHaveBeenCalledWith(mockId);
        expect(result).toEqual(mockProduct);
      });
    });
  
    describe("updateService", () => {
      it("Deve atualizar produto", async () => {
        const mockPdv = 'pdv_code';
        const mockProduct = {
          _id: 'product_id',
          nome: 'Product',
          precoCusto: 10,
          precoVenda: 20,
          qtdEstoque: 50,
          qtdEstoqueMin: 10,
          medida: 'unidade',
          statusVenda: true,
        };
        const updatedProduct = { _id: 'product_id', nome: 'Updated Product' };
  
        Product.findOneAndUpdate.mockResolvedValueOnce(updatedProduct);
  
        const result = await productService.updateService(
          mockPdv,
          'Updated Product',
          10,
          20,
          50,
          10,
          'unidade',
          true
        );
  
        expect(Product.findOneAndUpdate).toHaveBeenCalledWith(
          { codigoPDV: mockPdv },
          {
            nome: 'Updated Product',
            precoCusto: 10,
            precoVenda: 20,
            qtdEstoque: 50,
            qtdEstoqueMin: 10,
            medida: 'unidade',
            statusVenda: true,
          }
        );
        expect(result).toEqual(updatedProduct);
      });
    });
  
    describe("deleteService", () => {
      it("Deve deletar produto", async () => {
        const mockPdv = 'pdv_code';
        const mockProduct = { _id: 'product_id', nome: 'Açaí', precoCusto: 20, precoVenda: 40 };
  
        Product.findOneAndDelete.mockResolvedValueOnce(mockProduct);
  
        const result = await productService.deleteService(mockPdv);
  
        expect(Product.findOneAndDelete).toHaveBeenCalledWith({ codigoPDV: mockPdv });
        expect(result).toEqual(mockProduct);
      });
    });
  });