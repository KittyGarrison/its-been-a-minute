import { createContext, FormEvent, useContext } from "react";
import { Selection } from "@heroui/react";

/**
 * In our app, each context will be placed within its own file.
 * DO NOT ADD contexts for It's Been a Minute to this file.
 */

/* Example Documents, used within a MongoDB app this context contains the actions a user can take on a given document */
interface DocumentActionsContextInterface {
  documentId?: string;
  onAdd?: (e: FormEvent<HTMLFormElement> | any) => void;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
  onView?: (id: string) => void;
  loadingDocuments?: boolean;
}

const DocumentActionsContext = createContext<DocumentActionsContextInterface>({
  documentId: "",
  onAdd: () => {},
  onEdit: () => {},
  onDelete: () => {},
  onView: () => {},
  loadingDocuments: false,
});

const useDocumentActionsContext = () => useContext(DocumentActionsContext);

/* Example TableSettingContext, when users set settings in a table (like how many rows to see or which filters were added), these values are stored in localStorage */
interface TableSettingsContextInterface {
  page: number;
  rowsPerPage: number;
  filterCompanyName: string;
  statusFilter: Selection;
  visibleColumns: Selection;
  selectedRows: any;
}

const TableSettingsContext = createContext<TableSettingsContextInterface>({
  page: 0,
  rowsPerPage: 0,
  filterCompanyName: "",
  statusFilter: "all",
  visibleColumns: "all",
  selectedRows: "",
});

const useTableSettingsContext = () => useContext(TableSettingsContext);

/* Example UserContext, contains User information, user's loading state, and app actions the user can perform */ export interface UserContextInterface {
  userId?: string;
  role?: "candidate" | "advisor" | "recruiter" | "admin" | undefined; //indicates pro account
  email?: string;
  resume?: string;
  forgotPassword?: (e: FormEvent<HTMLFormElement>) => void;
  login?: (e: FormEvent<HTMLFormElement>) => void;
  logout?: () => void;
  signup?: (e: FormEvent<HTMLFormElement>) => void;
  loadingUser?: boolean;
}

const UserContext = createContext<UserContextInterface>({
  userId: "",
  role: undefined,
  email: "",
  resume: "",
  forgotPassword: () => {},
  login: () => {},
  logout: () => {},
  signup: () => {},
  loadingUser: true,
});

const useUserContext = () => useContext(UserContext);
