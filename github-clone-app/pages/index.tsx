// import Image from "next/image";

import getRepositories from "@/infrastructure/api/github.api";
import { useAppStore } from "@/presentation/hooks/appStore.hook";
import { useQuery } from "@tanstack/react-query";

export default function Page() {
  const { count, incrementCount, decrementCount } = useAppStore(
    (state) => state
  );

  const { data, isLoading, isError } = useQuery({
    queryFn: async () => await getRepositories(),
    queryKey: ["repositories"],
  });

  console.log(data);

  return (
    <div>
      <h1 className="mb-10">Finsphera challange github clone app</h1>
      <div>
        <span>Count state with Zustand: {count}</span>
        <br />
        <button type="button" onClick={() => void incrementCount()}>
          Increment
        </button>
        <br />
        <button type="button" onClick={() => void decrementCount()}>
          Decrement
        </button>
      </div>
    </div>
  );
}
