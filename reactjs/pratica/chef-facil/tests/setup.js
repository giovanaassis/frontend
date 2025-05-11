import "@testing-library/jest-dom/vitest";
import { afterAll, beforeAll } from "vitest";
import { server } from "./mocks/server";

beforeAll(() => server.listen());
afterAll(() => server.resetHandlers(), server.close());