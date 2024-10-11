import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment />);

        const commetTextarea = screen.getByTestId('comment-textarea');
        const submitButton = screen.getByTestId('comment-submit');
        const comentsList = screen.getByTestId('comments-list');

        fireEvent.change(commetTextarea, { target: { value: 'Primeiro comentário' } });
        fireEvent.click(submitButton);

        fireEvent.change(commetTextarea, { target: { value: 'Segundo comentário' } });
        fireEvent.click(submitButton);

        const commentItems = screen.getAllByTestId('comment-item');
        expect(commentItems.length).toBe(2);
        expect(comentsList).toHaveTextContent('Primeiro comentário');
        expect(comentsList).toHaveTextContent('Segundo comentário');
    })
});