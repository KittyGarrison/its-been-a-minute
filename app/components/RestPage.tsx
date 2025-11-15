import { Button, Card, CardFooter, CardHeader, Divider } from "@heroui/react"
import TrophyIcon from "./svgs/TrophyIcon"
import SparkleIcon from "./svgs/SparkleIcon";

interface RestPageProps {
  handleResetBatch: () => void;
}

export const RestPage = ({ handleResetBatch }) => {
  return (
    <Card>
      <CardHeader>
        <div className="text-center">
          <TrophyIcon />
          <h2 className="text-xl">
            Great Job
          </h2>
        </div>
      </CardHeader>

      <Divider />

      <div className="flex w-full">
        <p className="font-semibold flex justify-center w-full">You are the best</p>
      </div>


      <CardFooter>
        <div className="flex flex-col gap-2 w-full">
          <Button
            color="default"
            endContent={<SparkleIcon />}
            type="button"
            onPress={handleResetBatch}
            fullWidth
          >
            Keep going
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}