import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import request from 'supertest';
// import App from '@/app';
import { CreateUserDto } from '@dtos/users.dto';
import ProductRoute from '@routes/products.route';
import {Product} from '../interfaces/products.interface'
import {sign, verify} from 'jsonwebtoken'
import { SECRET_KEY } from '../config';
import { LoginInterface } from '../interfaces/users.interface';
import AuthRoute from '@routes/auth.route';
import App from '../app'

// const authRoute = new AuthRoute()
// const productRoute = new ProductRoute()
// const app = new App([authRoute]);
let authToken;
beforeAll(async () => {
  
  const authRoute = new AuthRoute()
  const app = new App([authRoute]);
  const user = { 
    email: 'adelekeayobami13@gmail.com',
    password: 'P@ssword123'
  };
  // // Your logic for signing up the user and obtaining the JWT token
  jest.setTimeout(1000000)
  const response = await request(app.getServer())
  
    .post(`/login`)
    .send(user);
    // jest.setTimeout(1000000)
    // authToken = response.body.token.token
  //   // console.log(response)
  // authToken = response.body.token
  // console.log(authToken)
//   console.log(response)
});



// Modify each test case to include the authentication token
describe('Testing products', () => {
  describe('[GET] /product', () => {
    it('fetch all products', async () => {
      const productRoute = new ProductRoute()
      const app = new App([productRoute]);
      const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWZjZDAwZmFkY2M5NjlmOWI5MjQ0NjciLCJpYXQiOjE3MTEzMTQwNTYsImV4cCI6MTcxMTMxNzY1Nn0.O3g-45A3WmODZXXyFgaoRDYfZxhIUJE_1DseOcYHcyM'
      return await request(app.getServer())
        .get(`/product`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200);
    });
  });
})
//   describe('[GET] /users/:id', () => {
//     it('fetch one product', async () => {
//       const productId = 'qpwoeiruty';
//       return request(app.getServer())
//         .get(`${productRoute.path}/${productId}`)
//         .set('Authorization', `Bearer ${authToken}`)
//         .expect(200);
//     });
//   });

//   describe('[POST] /product', () => {
//     it('create a product', async () => {
//       const product: Product = {
//         name: "fanta",
//         price: 500,
//         description: "lorep ipsium donor kolor kosita",
//         quantity: 11,
//       };
//       return request(app.getServer())
//         .post(`${productRoute.path}`)
//         .set('Authorization', `Bearer ${authToken}`)
//         .send(product)
//         .expect(201);
//     });
//   });

//   describe('[PATCH] /product/:id', () => {
//     it('update Product', async () => {
//       const productId = '65fd9da69a693687b8abc42e';
//       const product: Product = {
//         name: "fanta",
//         price: 500,
//         description: "lorep ipsium donor kolor kosita",
//         quantity: 11,
//       };
//       return request(app.getServer())
//         .put(`${productRoute.path}/${productId}`)
//         .set('Authorization', `Bearer ${authToken}`)
//         .send(product)
//         .expect(200);
//     });
//   });

//   describe('[DELETE] /product/:id', () => {
//     it('Delete product', async () => {
//       const productId = '60706478aad6c9ad19a31c84';
//       return request(app.getServer())
//         .delete(`${productRoute.path}/${productId}`)
//         .set('Authorization', `Bearer ${authToken}`)
//         .expect(200);
//     });
//   });
// });




















// let authToken: string;
// beforeAll(async () => {


//   const authRoute = new AuthRoute();
 
//   (mongoose as any).connect = jest.fn();
//   const app = new App([authRoute]);

//   const loginData: LoginInterface = {
//     email: 'adelekeayobami13@gmail.com',
//     password: 'P@ssword123',
//   };
//   // Your logic for signing up the user and obtaining the JWT token
//   const response = await request(app.getServer())
//     .post(`${authRoute.path}login`)
//     .send(loginData);
//     console.log(response)
//   authToken = response.body.token;
//   console.log(authToken)
// });
//   jest.setTimeout(100000);



// afterAll(async () => {
//   await new Promise<void>(resolve => setTimeout(() => resolve(), 500));
// });


// describe('Testing products', () => {
//   describe('[GET] /product', () => {
//     it('fetch all products', async () => {
//       const productRoute = new ProductRoute();

//       const products = productRoute.productController.productService.product;
//       products.find = jest.fn().mockReturnValue([
//         {
//           _id: "65fd9e46a5a4da656c105211",
//           name: "pepsi",
//           price: 530,
//           description: "lorep ipsium donor kolor kosita",
//           quantity: 11,
//           createdBy: "65fcd00fadcc969f9b924467",
//           createdAt: "2024-03-22T15:05:42.040Z",
//           updatedAt: "2024-03-22T15:05:42.040Z",
//         },
//         {
//           _id: "65fd9a1fe1764676b23dd2b0",
//           name: "pentinol",
//           price: 50,
//           description: "lorep ipsium donor kolor kosita",
//           quantity: 11,
//           createdBy: "65fcd00fadcc969f9b924467",
//           createdAt: "2024-03-22T15:05:42.040Z",
//           updatedAt: "2024-03-22T15:05:42.040Z",
//         },
//         {
//           _id: "65fd9da69a693687b8abc42e",
//           name: "fanta",
//           price: 500,
//           description: "lorep ipsium donor kolor kosita",
//           quantity: 11,
//           createdBy: "65fcd00fadcc969f9b924467",
//           createdAt: "2024-03-22T15:05:42.040Z",
//           updatedAt: "2024-03-22T15:05:42.040Z",
//         },
//       ]);

//       (mongoose as any).connect = jest.fn();
//       const app = new App([productRoute]);

//       return request(app.getServer()).get(`${productRoute.path}`).expect(200);
//     });
//   });

//   describe('[GET] /users/:id', () => {
//     it('fetch one product', async () => {
//       const productId = 'qpwoeiruty';

//       const productRoute = new ProductRoute();
//       const products = productRoute.productController.productService.product;

//       products.findOne = jest.fn().mockReturnValue({
//         _id: "65fd9da69a693687b8abc42e",
//         name: "fanta",
//         price: 500,
//         description: "lorep ipsium donor kolor kosita",
//         quantity: 11,
//         createdBy: "65fcd00fadcc969f9b924467",
//         createdAt: "2024-03-22T15:05:42.040Z",
//         updatedAt: "2024-03-22T15:05:42.040Z",
      
//       });

//       (mongoose as any).connect = jest.fn();
//       const app = new App([productRoute]);
//       return request(app.getServer()).get(`${productRoute.path}/${productId}`).expect(200);
//     });
//   });

//   describe('[POST] /product', () => {
//     it('create a product', async () => {

//       const userId = "60706478aad6c9ad19a31c84"
//       const expiresIn: number = 60 * 60
//       const secret: string = 'secretKey'
//       const jwt =  sign(userId, secret, {expiresIn})
//       const product: Product = {
//         name: "fanta",
//         price: 500,
//         description: "lorep ipsium donor kolor kosita",
//         quantity: 11,
//       };

//       const productRoute = new ProductRoute();
//       const products = productRoute.productController.productService.product;

//       products.findOne = jest.fn().mockReturnValue(null);
//       products.create = jest.fn().mockReturnValue({
//         _id: "65fd9da69a693687b8abc42e",
//         name: "fanta",
//         price: 500,
//         description: "lorep ipsium donor kolor kosita",
//         createdBy:"65fcd00fadcc969f9b924467",
//         quantity: 11,
//       });

//       (mongoose as any).connect = jest.fn();
//       const app = new App([productRoute]);
//       return request(app.getServer()).post(`${productRoute.path}`).send(product).expect(201)
//     });
//   });

//   describe('[PATCH] /product/:id', () => {
//     it('update Product', async () => {
//       const productId = '65fd9da69a693687b8abc42e';
//       const product: Product = {
//         name: "fanta",
//         price: 500,
//         description: "lorep ipsium donor kolor kosita",
//         quantity: 11,
//       };

//       const productRoute = new ProductRoute();
//       const products = productRoute.productController.productService.product;

//       if (product.name) {
//         products.findOne = jest.fn().mockReturnValue({
//           _id: productId,
//           name: product.name,
//           description: "lorep ipsium donor kolor kosita",
//           quantity: 11,
//         });
//       }

//       products.findByIdAndUpdate = jest.fn().mockReturnValue({
//         _id: productId,
//         name: product.name,
//         description: "lorep ipsium donor kolor kosita",
//         quantity: 11,

//       });

//       (mongoose as any).connect = jest.fn();
//       const app = new App([productRoute]);
//       return request(app.getServer()).put(`${productRoute.path}/${productId}`).send(product);
//     });
//   });

//   describe('[DELETE] /product/:id', () => {
//     it('Delete product', async () => {
//       const productId = '60706478aad6c9ad19a31c84';

//       const productRoute = new ProductRoute();
//       const products = productRoute.productController.productService.product;

//       products.findByIdAndDelete = await jest.fn().mockReturnValue({
//         _id: "60706478aad6c9ad19a31c84",
//         name: "fanta",
//         price: 500,
//         description: "lorep ipsium donor kolor kosita",
//         createdBy:"65fcd00fadcc969f9b924467",
//         quantity: 11,
//       });

//       (mongoose as any).connect = jest.fn();
//       const app = new App([productRoute]);
//       return request(app.getServer()).delete(`${productRoute.path}/${productId}`).expect(200);
//     });
//   });
// });
