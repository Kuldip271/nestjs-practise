// import { Controller,Get,Req } from "@nestjs/common";
// import { Request } from "express";
// @Controller('/users')
// export class UserController{
//     @Get('/profile')
//     getProfile(@Req() req : Request ){
//         console.log(req)
//         return {
//             name : "kuldip",
//             surname : "karangiya"
//         }
//     }
// }


////////////////////   lec - 5    ///////////////
  

// import { Controller, Get, Redirect,Res,Req } from "@nestjs/common";
// import { Request,Response } from "@nestjs/common";


// // NOTE: it can be any kind of logic, just for demo
// let recNum = 1;
// function getRecommendations() {
//   recNum += 1;

//   if (recNum > 5) {
//     return (recNum = 1);
//   }

//   return recNum < 5;
// }

// @Controller("users")
// export class UserController {
//   // @Example 1: Redirect to `/users/netflix` route
//   @Get("shows")

  
//   @Redirect("netflix") // url, statusCode (default to 302)
//   // @Redirect("netflix", 302)
// //   @Redirect("netflix", 307)
//   // @Redirect("/users/netflix", 302)
//   getShow(@Req() req : Request,@Res() res : Response ) {
//     return { message: "I am not going to show" };
//   }

//   // redirection path
//   @Get("netflix")
//   redirectNetflix() {
//     return {
//       shows: ["Dark", "Sabrina"],
//       message: "Netflix Redirect",
//       isRedirectPath: true,
//     };
//   }

//   // ****************************************** //

//   // @Example 2: Dynamic Redirect
//   // we need place the `@Redirect` decorator
//   // then in request handler we must return an object with this fields {url, statusCode}
//   @Get("recommendations")
//   @Redirect()
//   getRecommendations() {
//     const areLatestArrivals = getRecommendations();

//     if (areLatestArrivals) {
//       return {
//         url: "/users/latest-shows",
//         statusCode: 302, // optional
//       };
//     } else {
//       return {
//         url: "netflix", // it is same as /users/netflix
//       };
//     }
//   }

//   // redirection path
//   @Get("latest-shows")
//   getLatestShows() {
//     return {
//       shows: ["Stanger Things 4", "Money Heist"],
//       message: "Latest shows Redirect",
//     };
//   }
// }

////////////////////   lec - 6   ///////////////

// import { Controller, Get, Headers,Param,Query} from "@nestjs/common";


// interface userparam{
//     name : string,
//     age : 25
// }

// @Controller("users")
// export class UserController {
//   // @Example 1: Headers Params Object
//   @Get("headers")
//   getHeaders(@Headers() headers: Record<string, any>) {
//     console.log(headers);
//     return headers;
//   }

//   @Get('u1')
//   getu1(@Query() q : userparam){
//     console.log(q)
//     console.log(`person name ${q.name}`)
//     console.log(`person age ${q.age}`)
//     return 'query parameter passed'
//   }

//    @Get('pht/:id')
//    getParams(@Param() params: string)
//    {
//        console.log(params)
//        return 'success param'
//    }
//   // @Example 2: Extract `User-Agent` header from Headers Object
//   @Get("runtime")
//   getRuntime(@Headers("User-Agent") ua: string) {
//     console.log(ua);
//     return { runtime: ua };
//   }

//   // @Example 3: Extract multiple headers from Headers Object
//   @Get("multi-headers")
//   getRuntimeAndCache(
//     @Headers("User-Agent") ua: string, 
//     @Headers("Cache-Control") cache: string
//   ) {
//     return { runtime: ua, cacheControl: cache };
//   }
// }

//////////////////////     lec -7 /////////////////////


// import { Body, Controller, Post, Put } from "@nestjs/common";

// class ShowDTO {
//   id: number;
//   name: string;
//   rating: number;
//   type: string;
// }

// @Controller("users")
// export class UserController {
//   // @Example 1: Body Object
//   @Post("video")
//   addVideo(@Body() requestData: Record<string, any>) {
//     console.log(requestData);
//     return { success: true, data: requestData };
//   }

//   // @Example 2: Extract `name` from Body Object
//   @Post("show")
//   addShow(@Body("name") name: string) {
//     return { message: "Show added", show: name };
//   }

//   // @Example 3: Extract mutliple keys from Body Object
//   @Post("movie")
//   addMovie(@Body("name") name: string, @Body("id") id: number) {
//     return { message: "Data extracted", show: name, movieId: id };
//   }

//   // @Example 4: Using `DTO (Data Transfer Object)` for data type
//   @Put("show")
//   updateShow(@Body() show: ShowDTO) {
//     return { message: "Show updated", name: show.name, id: show.id };
//   }
// }

/////////////////  lec - 8 ////////////////////


// import {
//     Body,
//     Controller,
//     Delete,
//     Get,
//     Param,
//     Post,
//     Put,
//   } from "@nestjs/common";
//   import { CreateUserDTO } from './dto'
  
//   let USERS = [];
  
//   @Controller("/users")
//   export class UserController {
//     @Post()
//     createUser(@Body() createUserDto: CreateUserDTO) {
//       USERS.push(createUserDto);
//       return { message: "User created" };
//     }
  
//     @Get()
//     findAllUsers() {
//       return USERS;
//     }
  
//     @Get(":id")
//     findUserById(@Param("id") id: number) {
//       const user = USERS.find((user) => user.id === +id);
  
//       if (!user) {
//         return { message: "User not found" };
//       }
  
//       return user;
//     }
  
//     @Put(":id")
//     updateUser(@Param("id") id: number, @Body() updateUserDto: CreateUserDTO) {
//       const userIdx = USERS.findIndex((user) => user.id === +id);
  
//       if (!userIdx) {
//         return { message: "User not found" };
//       }
  
//       USERS[userIdx] = updateUserDto;
  
//       return { message: "User updated" };
//     }
  
//     @Delete(":id")
//     deleteUser(@Param("id") id: number) {
//       USERS = USERS.filter((user) => user.id !== +id);
  
//       return { message: "User deleted" };
//     }
//   }

///////////////////// lec 9 ///////////////////////////


import { Controller, Get, HostParam, Ip } from "@nestjs/common";

@Controller({path : "/users"})
export class UsersController {
  @Get("ip")
  findIp(@Ip() ip: string) {
    return { ip };
  }
  @Get()
  getuser(@HostParam('domain') params : Record<string,any>)
  {
    return 'helloworld'
  }
}