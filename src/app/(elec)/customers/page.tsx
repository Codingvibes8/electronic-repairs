import { getCustomer } from "@/lib/queries/getCustomer";
import { BackButton } from "@/components/BackButton";
import * as Sentry from "@sentry/nextjs";
import CustomerForm from "@/app/(elec)/customers/form/CustomerForm";

export async function generateMetadata({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
    const customerId = searchParams.customerId;

    if (!customerId) return { title: "New Customer" };

    return { title: `Edit Customer #${customerId}` };
}

export default async function CustomerFormPage({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
    try {
        const customerId = searchParams.customerId;

        // Edit customer form
        if (customerId) {
            const customer = await getCustomer(parseInt(customerId));

            if (!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">Customer ID #{customerId} not found</h2>
                        <BackButton title="Go Back" variant="default" />
                    </>
                );
            }
            console.log(customer);
            // put customer form component
            return <CustomerForm customer={customer} />;
        } else {
            // new customer form component
            return <CustomerForm />;
        }
    } catch (e) {
        if (e instanceof Error) {
            Sentry.captureException(e);
            throw e;
        }
    }
}
