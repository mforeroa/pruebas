import { render, screen, fireEvent } from "@testing-library/react"
import Like from "../Like";

test("Value of likes by default", ()=>{
    render(<Like/>);
    expect(screen.getByText(/likes: 0/i)).toBeInTheDocument();
});

test("Increment likes when Like button is clicked", () => {
    render(<Like />);
    const likeButton = screen.getByText("Like");
  
    // Verificar que el texto inicial es "Likes: 0"
    expect(screen.getByText("Likes: 0")).toBeInTheDocument();
  
    // Simular clic en el botón Like
    fireEvent.click(likeButton);
  
    // Verificar que el estado ha sido actualizado correctamente
    expect(screen.getByText("Likes: 1")).toBeInTheDocument();
  });
  
  test("Decrement likes when Dislike button is clicked", () => {
      render(<Like />);
      const dislikeButton = screen.getByText("Dislike");
    
      // Verificar que el texto inicial es "Likes: 0"
      expect(screen.getByText("Likes: 0")).toBeInTheDocument();
    
      // Simular clic en el botón Dislike
      fireEvent.click(dislikeButton);
    
      // Verificar que el estado ha sido actualizado correctamente
      expect(screen.getByText("Likes: -1")).toBeInTheDocument();
    });