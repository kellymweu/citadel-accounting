import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CardComponent = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Current Balance</p>
        </CardContent>
        <CardContent>
          <p>$1,250.86</p>
        </CardContent>
      </Card>
      ;
    </div>
  );
};

export default CardComponent;
