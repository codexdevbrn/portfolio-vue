import axios from "axios";
import { onMounted, ref } from "vue";

interface UserProps {
  name?: string;
  avatar_url?: string;
  html_url?: string;
  bio?: string;
  location?: string;
}

export function useUser() {
  const users = ref<UserProps>();

  const fetchUsers = async () => {
    try {
      const response = await axios.get<UserProps>("/users/codexdevbrn");
      users.value = response.data;
    } catch (error) {
      console.error("Erro ao buscar os usuários:", error);
    }
  };

  return {
    users,
    fetchUsers,
  };
}
