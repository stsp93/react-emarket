export default function showSuccess(updateModal, closeModal) {
                // Show Success and remove it after 2s
                updateModal('Success');

                setTimeout(() => {
                    closeModal()
                }, 2000)
}