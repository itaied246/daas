import {generateCreate} from "../../../../src/api/mutation/create/generateCreate";
import {car} from "../../../utils/models";

describe("generate create mutation", () => {

    test("single input", () => {

        const expected =
            `class CreateCar(graphene.relay.ClientIDMutation):
    car = graphene.Field(data.api.types.CarType)

    class Input:
        seats = graphene.Int(required=True)

    @classmethod
    def mutate_and_get_payload(cls, args, c, i):
        car = data.models.Car(
            seats=args.get('seats')
        )
        car.save()
        return CreateCar(car=car)`;

        const actual = generateCreate(car);

        expect(actual).toEqual(expected);

    });

});
