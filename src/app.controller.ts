import { Controller, Get } from "@nestjs/common";

@Controller("api/v1")
export class AppController {
    @Get("/hi")
    getHiThere() {
        return "hi there";
    }

    @Get("bye")
    getByThere() {
        return "bye there"
    }
}